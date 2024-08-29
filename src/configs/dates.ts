import i18n from 'src/i18n';

const { t } = i18n.global;

export const dayOfWeek: { daysShort: Array<string> } = {
  daysShort: [t('MON'), t('TUE'), t('WED'), t('THU'), t('FRI'), t('SAT'), t('SUN')],
};
