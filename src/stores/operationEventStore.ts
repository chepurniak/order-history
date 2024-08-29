import { defineStore } from 'pinia';
import { toggleOptions } from 'src/configs/toggleOptions';
import { transformOnlyDate as toOnlyDate } from 'src/utils/dataFormatters';
import { eventsLabels, getEventLabel } from 'src/configs/eventsLabels';
import getSymbolFromCurrency from 'currency-symbol-map';
import i18n from 'src/i18n';
import { ORDER_CONFIRMATION } from 'src/types/events/OrderConfirmation';
import { CREATED_REPLACEMENT } from 'src/types/events/CreatedReplacement';
import { QScrollArea } from 'quasar';

// mock data instead backend calls
import { operationEventsExample } from 'src/mockData/operationEvents';
import { baseDataExample } from 'src/mockData/baseData';
import { orderPositionsExample } from 'src/mockData/orderPositions';


export type OPERATION_TYPE = 'PreShipping' | 'ShippingRelated' | 'ReturnRelated' | 'ReplacementRelated' | 'Other';

export interface OPERATION_EVENT_DTO {
  id: string;
  name: string;
  date: string;
  employee: string | null;
  service: string | null;
  type: OPERATION_TYPE;
  tags: Array<string> | null;
  details: string;
  // enriched properties
  hide?: boolean | null;
  label?: string | null;
}

export interface BASE_DATA_DTO {
  marketplace: string | null;
  marketplaceReference: string | null;
  operationId: number | null;
  receiptNumber: string | null;
  customerName: string | null;
  customerMailAddress: string | null;
  customerNumber: string | null;
  customerAddress: string | null;
  customerCountry: string | null;
  ebayUsername: string | null;
  paymentCondition: string | null;
  paymentReference: string | null;
  iban: string | null;
  bic: string | null;
}

type OVERVIEW_POSITION_DTO = {
  ArticleNumber: string;
  VariantId: number;
  ArticleName: string;
  VariantName: string;
  QuantityOrdered: number;
  QuantityShipped: number;
  Quantity: number;
};

interface OperationEventStore {
  isEventsLoading: boolean;
  operationEvents: Array<OPERATION_EVENT_DTO>;
  baseData: BASE_DATA_DTO;
  eventsToggle: Array<OPERATION_TYPE>;
  eventsFilter: string;
  eventsRef: Array<HTMLDivElement> | null;
  scrollAreaRef: QScrollArea | null;
  currency: string;
  operationPositions: Array<OVERVIEW_POSITION_DTO>;
  errorMessage: string;
  deliveryReceiptFilter: string;
}

const { t } = i18n.global;

export const useOperationEventStore = defineStore('operationEventStore', {
  state: (): OperationEventStore => ({
    isEventsLoading: false,
    operationEvents: [],
    baseData: {} as BASE_DATA_DTO,
    eventsToggle: toggleOptions.map((toggleItem) => toggleItem.value),
    eventsFilter: '',
    eventsRef: null,
    scrollAreaRef: null,
    currency: '',
    operationPositions: [],
    errorMessage: '',
    deliveryReceiptFilter: '',
  }),

  getters: {
    getFilteredEvents(): OPERATION_EVENT_DTO[] {
      if (!this.operationEvents?.length) return [];

      const filterInput = this.eventsFilter?.toLowerCase();
      const isMatch = (text: string | undefined | null) => text?.toLowerCase().includes(filterInput);

      return this.operationEvents.filter(
        (event) =>
          !event.hide &&
          this.eventsToggle.includes(event.type) &&
          (!filterInput || isMatch(event.label) || event.tags?.some((tag) => isMatch(tag))) &&
          (!this.deliveryReceiptFilter || event.details.includes(this.deliveryReceiptFilter))
      );
      //ToDo filter by details
    },

    getGroupedByDate(): OPERATION_EVENT_DTO[][] {
      const groupedData: OPERATION_EVENT_DTO[][] = [];
      for (const object of this.getFilteredEvents) {
        const dateIndex = groupedData.findIndex((item) => toOnlyDate(item[0].date) === toOnlyDate(object.date));
        if (dateIndex < 0) groupedData.push([object]);
        else groupedData[dateIndex].push(object);
      }
      return groupedData;
    },
  },

  actions: {
    /**
     * set order currency
     */
    setCurrency() {
      const orderConfirmation = this.operationEvents.find((event) => event.name === 'OrderConfirmation');
      const currencyString = orderConfirmation?.details
        ? ((JSON.parse(orderConfirmation.details) as ORDER_CONFIRMATION)?.Currency ?? '')
        : '';
      this.currency = getSymbolFromCurrency(currencyString) ?? '';
    },

    /**
     * scroll to the clicked event in timeline
     */
    async scrollToEvent(id: string) {
      const index = this.getFilteredEvents.findIndex((event) => event.id === id);
      if (!this.scrollAreaRef || !this.eventsRef || index < 0) return;
      const eventElem = this.eventsRef[index];
      const { verticalPosition, verticalContainerSize } = this.scrollAreaRef.getScroll();
      const eventTop = eventElem.offsetTop;
      const eventBottom = eventTop + eventElem.offsetHeight;

      if (verticalPosition > eventTop || verticalContainerSize + verticalPosition < eventBottom) {
        this.scrollAreaRef.setScrollPosition('vertical', eventTop, 300);
        await new Promise((resolve) => setTimeout(resolve, 310));
      }

      eventElem.className = 'active-event';
      await new Promise((resolve) => setTimeout(resolve, 200));
      eventElem.classList.remove('active-event');
    },

    /**
     * sort operation events by date and time, at the end events without date
     */
    sortOperationEventsByDate(events: Array<OPERATION_EVENT_DTO>) {
      return events.sort(
        (event1, event2) =>
          (event1.date ? new Date(event1.date)?.getTime() : Number.MAX_VALUE) -
          (event2.date ? new Date(event2.date)?.getTime() : Number.MAX_VALUE)
      );
    },

    /**
     * reset events toggles and filter
     */
    resetFilters() {
      this.eventsToggle = toggleOptions.map((toggleItem) => toggleItem.value);
      this.eventsFilter = '';
    },

    /**
     * enrich events with new tags
     */
    enrichEvents(events: Array<OPERATION_EVENT_DTO>) {
      events.forEach((event) => {
        event.label = getEventLabel(event);

        if (event.name === 'OrderConfirmation' && event.type === 'ReplacementRelated')
          event.label = t('EVENT_CREATED_REPLACEMENT');

        if (!event.tags) event.tags = [];
        event.tags.push(getEventLabel(event));
      });
    },

    async fetchMainOperationEvents(orderId: number): Promise<boolean> {
      const events = await this.fetchOperationEvents(orderId);
      if (!events) return false;
      this.enrichEvents(events);
      this.operationEvents = this.sortOperationEventsByDate(events);
      this.setCurrency();

      void this.fetchReplacementsEvents();
      return true;
    },

    async fetchReplacementsEvents() {
      for (const createdReplacement of this.operationEvents.filter((event) => event.name === 'CreatedReplacement')) {
        const details = createdReplacement?.details
          ? (JSON.parse(createdReplacement.details) as CREATED_REPLACEMENT)
          : null;
        if (!details?.OrderId || !details.ServiceReceiptId) continue;
        const events = await this.fetchOperationEvents(details.OrderId);
        if (!events) continue;
        createdReplacement.hide = true;
        events.map((event) => (event.type = 'ReplacementRelated'));
        this.enrichEvents(events);
        this.operationEvents = this.sortOperationEventsByDate([...this.operationEvents, ...events]);
      }
    },

    async fetchOperationEvents(orderId: number): Promise<Array<OPERATION_EVENT_DTO> | null> {
      // const resp = await axiosWrapper(`url/${orderId}`, {
      //   method: 'GET',
      // });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const resp = {
        status: 200,
        data: operationEventsExample,
      }
      if (resp.status === 200) return resp.data as Array<OPERATION_EVENT_DTO>;
      // ToDo: richtige messagees wenn SIMS doku mit Fehler macht
      this.errorMessage = t('SOMETHING_WENT_WRONG');
      return null;
    },

    async fetchOperationBaseData(orderId: number): Promise<boolean> {
      // const resp = await axiosWrapper(`url/${orderId}`, {
      //   method: 'GET',
      // });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const resp = {
        status: 200,
        data: baseDataExample
      }
      if (resp.status === 200) {
        this.baseData = resp.data as BASE_DATA_DTO;
        return true;
      }
      // ToDo: richtige messagees wenn SIMS doku mit Fehler macht
      this.errorMessage = t('SOMETHING_WENT_WRONG');
      return false;
    },

    async compareAllAvailableEvents(): Promise<boolean> {
      // const resp = await axiosWrapper('api/v1', {
      //   method: 'GET',
      //   params: { valueType: 'Name' },
      // });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const resp = {
        status: 200,
        data: []
      }
      if (resp.status === 200) {
        const supportedEvents = eventsLabels.map((event) => event.name);
        const notSupportedEvents = (resp.data as string[])?.filter((event) => !supportedEvents.includes(event));
        // ToDo Kibana Logging
        // eslint-disable-next-line no-console
        if (notSupportedEvents.length) console.error('APP not supported events', notSupportedEvents);
        return true;
      }
      return false;
    },

    async fetchPositions(orderId: number) {
      // const resp = await axiosWrapper(`url/${orderId}`, {
      //   method: 'GET',
      // });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const resp = {
        status: 200,
        data: orderPositionsExample,
      }
      if (resp.status === 200) {
        this.operationPositions = resp.data as Array<OVERVIEW_POSITION_DTO>;
        return true;
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      this.errorMessage = resp?.data?.error?.message ?? t('ERROR_DEFAULT_TITLE');
      return false;
    },

    async redirectProcessToAccounting(processParentId: number) {
      // const resp = await axiosWrapper(`url/${processParentId}`, {
      //   method: 'PATCH',
      // });
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const resp = {
        status: 200,
      }
      return resp.status === 200;
    },
  },
});
