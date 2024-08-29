export default [
  {
    path: '/',
    redirect: 'operation-events/0',
    component: () => import('@/views/LayoutDefault.vue'),

    children: [
      {
        path: '/operation-events/:orderReceiptId',
        name: 'operationEvents',
        component: () => import('@/views/OperationEventsView.vue'),
        props: (route: { params: { orderReceiptId: number } }) => ({
          orderReceiptId: ~~route.params.orderReceiptId,
        }),
        meta: {
          title: 'APP_ORDER_DETAILS',
          back: 'operationEventsSearch',
        },
      },
    ],
  },
];
