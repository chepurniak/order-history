const operationEventsExample = [{
    id: "1",
    name: "OrderConfirmation",
    date: "2024-01-01T09:55:17",
    employee: null,
    service: "sevice",
    type: "PreShipping",
    tags: null,
    details: "{\"OrderReceiptPositions\":[{\"Id\":14492759,\"CustomerWish\":\"Refund\",\"VorPosId\":41906984,\"ArticleNumber\":\"10047797\",\"VariantId\":0,\"PricePerUnit\":39.59,\"IsNetPrice\":true,\"Quantity\":1,\"TaxRate\":0.19,\"DiscountPercentage\":0,\"DiscountAmount\":0,\"VariantName\":\"\",\"Ean\":\"4052025477974\",\"ArticleName\":\"\",\"ImageUrl\":\"https://media.relaxdays.de/images/800/10047797_0_1_9f9f904c53c735f87cc189668b8167a9.jpg\",\"TotalPositionPriceGross\":47.11,\"CalculatedPricePerUnit\":39.59}],\"Id\":59470904,\"MarketplaceReferenceNumber\":\"UVqJbP7Kd\",\"Marketplace\":\"Dropship - Amazon Vendor DE\",\"OrderId\":16090622,\"ReceiptNumber\":\"2024-11082114\",\"ReceiptDate\":\"2024-05-13T09:55:17\",\"ShippingCost\":0,\"ShippingTaxRate\":0.19,\"Currency\":\"EUR\",\"PaymentCondition\":\"Vendor30/3\",\"RefundedShippingCost\":0,\"PaymentReference\":\"UVqJbP7Kd\",\"IsPriority\":false,\"ExpectedDeliveryDate\":\"2024-01-04T00:00:00\"}"
}, {
    id: "2",
    name: "DeliveryReceipt",
    date: "2024-01-02T07:36:00",
    employee: null,
    service: "sevice",
    type: "ShippingRelated",
    tags: null,
    details: "{\"Id\":59867293,\"RetoureId\":64664662,\"ReceiptNumber\":\"2024-21274716\",\"ReceiptDate\":\"2024-05-27T07:36:00\",\"PackagingDescription\":\"2024-11082114-GRO-1\",\"NormalDeliveryReceiptPositions\":null,\"DeliveryReceiptPositions\":[{\"Id\":14565078,\"CustomerWish\":\"Refund\",\"VorPosId\":41906984,\"ArticleNumber\":\"10047797\",\"VariantId\":0,\"PricePerUnit\":39.59,\"IsNetPrice\":true,\"Quantity\":1,\"TaxRate\":0.19,\"DiscountPercentage\":0,\"DiscountAmount\":0,\"VariantName\":\"\",\"Ean\":\"4052025477974\",\"ArticleName\":\"\",\"ImageUrl\":\"https://media.relaxdays.de/images/800/10047797_0_1_9f9f904c53c735f87cc189668b8167a9.jpg\",\"TotalPositionPriceGross\":47.11,\"CalculatedPricePerUnit\":39.59}],\"DeliveryTrackingDetails\":[]}"
}, {
    id: "3",
    name: "InvoiceReceipt",
    date: "2024-01-02T07:36:01",
    employee: null,
    service: "sevice",
    type: "ShippingRelated",
    tags: null,
    details: "{\"PackagingDescription\":\"2024-11082114-GRO-1\",\"Id\":59867295,\"ReceiptDate\":\"2024-05-27T07:36:01\",\"DeliveryReceiptId\":64664662,\"ReceiptNumber\":\"2024-31282682\",\"NormalInvoiceReceiptPositions\":null,\"InvoiceReceiptPositions\":[{\"Id\":14566253,\"VorPosId\":41906984,\"ArticleNumber\":\"10047797\",\"VariantId\":0,\"PricePerUnit\":39.59,\"IsNetPrice\":true,\"Quantity\":1,\"TaxRate\":0.19,\"DiscountPercentage\":0,\"DiscountAmount\":0,\"VariantName\":\"\",\"Ean\":\"4052025477974\",\"ArticleName\":\"\",\"ImageUrl\":\"https://media.relaxdays.de/images/800/10047797_0_1_9f9f904c53c735f87cc189668b8167a9.jpg\",\"TotalPositionPriceGross\":47.11,\"CalculatedPricePerUnit\":39.59}]}"
}, {
    id: "4",
    name: "CarrierShipmentTracking",
    date: "2024-01-02T09:00:00+02:00",
    employee: null,
    service: "sevice",
    type: "ShippingRelated",
    tags: null,
    details: "{\"Carrier\":\"DHL\",\"TrackingNumber\":\"TESTNUMBER\",\"NumberOfShipment\":1,\"CarrierShipmentTrackingStatus\":\"ArrivedAtCarrier\",\"CarrierTimestamp\":\"2024-04-27T02:00:00\",\"EventType\":\"Forwarded\",\"EventReason\":\"Other\"}"
}, {
    id: "5",
    name: "NoteCreated",
    date: "2024-01-03T14:41:08.88724+02:00",
    employee: "Some Person",
    service: "service",
    type: "Other",
    tags: null,
    details: "{\"Reason\":\"CustomerSentNonCompanyGoods\",\"IntendedFor\":\"Retoure, Support\",\"Note\":\"Lorem ipsum dolor sit amet\"}"
}, {
    id: "R-CR-114257447",
    name: "CreditReceipt",
    date: "2024-01-04T11:58:12",    
    employee: "Support Employee",
    service: "service",    
    type: "Other",
    tags: null,    
    details: "{\"Id\":114257447,\"RefundThrough\":\"Accounting\",\"ReceiptDate\":\"2024-08-20T11:58:12\",\"ShippingCost\":0,\"ReceiptNumber\":\"2024-35000219\",\"NormalCreditReceiptPositions\":null,\"CreditReceiptPositions\":[{\"Id\":260286,\"RefundReason\":\"Dispute\",\"VorPosId\":42823193,\"ArticleNumber\":\"10025630\",\"VariantId\":917,\"PricePerUnit\":19.98,\"IsNetPrice\":false,\"Quantity\":1,\"TaxRate\":0.19,\"DiscountPercentage\":0,\"DiscountAmount\":0,\"VariantName\":\"Farbwechsel\",\"Ean\":\"4052025935634\",\"ArticleName\":\"Gartenleuchte Glaskugel 4erSet\",\"ImageUrl\":\"https://media.relaxdays.de/images/800/10025630_917_1_2ed77a83d03c0e985e3a8271994077c6.jpg\",\"TotalPositionPriceGross\":0}],\"InvoiceReceiptId\":65060112,\"User\":\"Artem Chepurniak\",\"StartTime\":\"2024-08-20T11:58:03.969533\",\"FinishTime\":\"2024-08-20T11:59:56.64527\",\"ProcessParentId\":462}"
  }, {
    id: "R-AB-1534",
    name: "ArticleBooking",
    date: "2024-01-11T10:41:58.087047",
    employee: "Retoure Mitarbeiter",
    service: "service",
    type: "ReturnRelated",
    tags: null,
    details: "{\"Id\":1534,\"User\":\"Artem Chepurniak\",\"BookedArticle\":[{\"Id\":134,\"ArticleNumber\":\"10024236\",\"VariantId\":111,\"VariantName\":\"Grau\",\"ArticleName\":\"W\\u00E4schekorb Bambus mit Klappdeckel\",\"CartNumber\":\"11;01;25;02\",\"Ean\":\"4052025918309\",\"ImageUrl\":\"https://media.relaxdays.de/images/800/10024236_111_1_4e6323361caf2344eb72bb0af1e9d7d7.jpg\",\"ProcessId\":1534,\"Quantity\":1,\"ArticleBookingProcess\":null,\"Condition\":\"ToTrash\"}],\"StartTime\":\"2024-08-29T18:41:58.087047\",\"FinishTime\":\"2024-08-29T18:42:18.95321\"}"
}, {  
    id: "R-RR-58327720",
    name: "ReturnReceipt",  
    date: "2024-01-11T13:52:27",
    employee: "Retoure Mitarbeiter",  
    service: "sevice",
    type: "ReturnRelated", 
    tags: null,
    details: "{\"Id\":58327720,\"DeliveryReceiptId\":64225072,\"ReceiptNumber\":\"2024-20763903\",\"ReceiptDate\":\"2024-04-03T13:52:27\",\"NormalReturnReceiptPositions\":null,\"ReturnReceiptPositions\":[{\"Id\":672764,\"VorPosId\":40912510,\"ArticleNumber\":\"10045739\",\"VariantId\":0,\"PricePerUnit\":9.99,\"IsNetPrice\":false,\"Quantity\":1,\"TaxRate\":0.19,\"DiscountPercentage\":0.046,\"DiscountAmount\":0.46,\"VariantName\":\"\",\"Ean\":\"4052025457396\",\"ArticleName\":\"Roter Waschball 4er Set\",\"ImageUrl\":\"https://media.relaxdays.de/images/800/10045739_0_1_6a5509ef0b6961f03f24080739a427b1.jpg\",\"TotalPositionPriceGross\":9.53},{\"Id\":672765,\"VorPosId\":40912511,\"ArticleNumber\":\"10027753\",\"VariantId\":139,\"PricePerUnit\":9.99,\"IsNetPrice\":false,\"Quantity\":1,\"TaxRate\":0.19,\"DiscountPercentage\":0.046,\"DiscountAmount\":0.46,\"VariantName\":\"Anthrazit\",\"Ean\":\"4052025922429\",\"ArticleName\":\"6er Flaschentr\\u00E4ger Filz\",\"ImageUrl\":\"https://media.relaxdays.de/images/800/10027753_139_1_1acc57cdcd96515dcb54b141a9d25135.jpg\",\"TotalPositionPriceGross\":9.53},{\"Id\":672766,\"VorPosId\":40912512,\"ArticleNumber\":\"10046375\",\"VariantId\":0,\"PricePerUnit\":11.99,\"IsNetPrice\":false,\"Quantity\":1,\"TaxRate\":0.19,\"DiscountPercentage\":0.0458,\"DiscountAmount\":0.55,\"VariantName\":\"\",\"Ean\":\"4052025463755\",\"ArticleName\":\"75-tlg. Nadelspiel aus Bambus mit Tasche\",\"ImageUrl\":\"https://media.relaxdays.de/images/800/10046375_0_1_045eea1ae277b4ba94d3ad6addbc4212.jpg\",\"TotalPositionPriceGross\":11.44},{\"Id\":672767,\"VorPosId\":40912513,\"ArticleNumber\":\"10032591\",\"VariantId\":0,\"PricePerUnit\":24.99,\"IsNetPrice\":false,\"Quantity\":1,\"TaxRate\":0.19,\"DiscountPercentage\":0.046,\"DiscountAmount\":1.15,\"VariantName\":\"\",\"Ean\":\"4052025325916\",\"ArticleName\":\"Hemden W\\u00E4schest\\u00E4nder f\\u00FCr 33 B\\u00FCgel\",\"ImageUrl\":\"https://media.relaxdays.de/images/800/10032591_0_1_175c1906215a6713574742ad32913d2b.jpg\",\"TotalPositionPriceGross\":23.84},{\"Id\":672768,\"VorPosId\":40912514,\"ArticleNumber\":\"10023673\",\"VariantId\":747,\"PricePerUnit\":12.99,\"IsNetPrice\":false,\"Quantity\":3,\"TaxRate\":0.19,\"DiscountPercentage\":0.0459,\"DiscountAmount\":1.79,\"VariantName\":\"Dunkelgr\\u00FCn\",\"Ean\":\"4052025946869\",\"ArticleName\":\"H\\u00E4ngematte Outdoor\",\"ImageUrl\":\"https://media.relaxdays.de/images/800/10023673_747_1_eef7e2122d6f72d85dc705d79abab171.jpg\",\"TotalPositionPriceGross\":37.18},{\"Id\":672769,\"VorPosId\":40912515,\"ArticleNumber\":\"10023622\",\"VariantId\":0,\"PricePerUnit\":12.99,\"IsNetPrice\":false,\"Quantity\":1,\"TaxRate\":0.19,\"DiscountPercentage\":0.0454,\"DiscountAmount\":0.59,\"VariantName\":\"\",\"Ean\":\"4052025236229\",\"ArticleName\":\"Digitale Feinwaage Mini\",\"ImageUrl\":\"https://media.relaxdays.de/images/800/10023622_0_1_008bae378d5fb60eedfe886d63081f30.jpg\",\"TotalPositionPriceGross\":12.4}],\"ReturnReason\":null,\"User\":null,\"ManualFinishedInfo\":null}"
}, {
    id: "R-CI-58489753",
    name: "CancellationInvoice",
    date: "2024-01-11T14:40:47",
    employee: "Kundensupport Mitarbeiter",
    service: "sevice",
    type: "ReturnRelated",
    tags: null,
    details: "{\"ShippingCost\":0,\"RefundAmount\":null,\"Id\":58489753,\"InvoiceReceiptId\":null,\"ReceiptNumber\":\"2024-30821364\",\"ReceiptDate\":\"2024-04-09T07:40:47\",\"NormalCancellationInvoiceReceiptPositions\":null,\"CancellationInvoiceReceiptPositions\":[{\"Id\":569724,\"VorPosId\":40912510,\"ArticleNumber\":\"10045739\",\"VariantId\":0,\"PricePerUnit\":9.54,\"IsNetPrice\":false,\"Quantity\":1,\"TaxRate\":0.19,\"DiscountPercentage\":0.046,\"DiscountAmount\":0.46,\"VariantName\":\"\",\"Ean\":\"4052025457396\",\"ArticleName\":\"Roter Waschball 4er Set\",\"ImageUrl\":\"https://media.relaxdays.de/images/800/10045739_0_1_6a5509ef0b6961f03f24080739a427b1.jpg\",\"TotalPositionPriceGross\":9.53},{\"Id\":569725,\"VorPosId\":40912511,\"ArticleNumber\":\"10027753\",\"VariantId\":139,\"PricePerUnit\":9.54,\"IsNetPrice\":false,\"Quantity\":1,\"TaxRate\":0.19,\"DiscountPercentage\":0.046,\"DiscountAmount\":0.46,\"VariantName\":\"Anthrazit\",\"Ean\":\"4052025922429\",\"ArticleName\":\"6er Flaschentr\\u00E4ger Filz\",\"ImageUrl\":\"https://media.relaxdays.de/images/800/10027753_139_1_1acc57cdcd96515dcb54b141a9d25135.jpg\",\"TotalPositionPriceGross\":9.53},{\"Id\":569726,\"VorPosId\":40912512,\"ArticleNumber\":\"10046375\",\"VariantId\":0,\"PricePerUnit\":11.45,\"IsNetPrice\":false,\"Quantity\":1,\"TaxRate\":0.19,\"DiscountPercentage\":0.0458,\"DiscountAmount\":0.55,\"VariantName\":\"\",\"Ean\":\"4052025463755\",\"ArticleName\":\"75-tlg. Nadelspiel aus Bambus mit Tasche\",\"ImageUrl\":\"https://media.relaxdays.de/images/800/10046375_0_1_045eea1ae277b4ba94d3ad6addbc4212.jpg\",\"TotalPositionPriceGross\":11.44},{\"Id\":569727,\"VorPosId\":40912513,\"ArticleNumber\":\"10032591\",\"VariantId\":0,\"PricePerUnit\":23.85,\"IsNetPrice\":false,\"Quantity\":1,\"TaxRate\":0.19,\"DiscountPercentage\":0.046,\"DiscountAmount\":1.15,\"VariantName\":\"\",\"Ean\":\"4052025325916\",\"ArticleName\":\"Hemden W\\u00E4schest\\u00E4nder f\\u00FCr 33 B\\u00FCgel\",\"ImageUrl\":\"https://media.relaxdays.de/images/800/10032591_0_1_175c1906215a6713574742ad32913d2b.jpg\",\"TotalPositionPriceGross\":23.84},{\"Id\":569728,\"VorPosId\":40912514,\"ArticleNumber\":\"10023673\",\"VariantId\":747,\"PricePerUnit\":12.4,\"IsNetPrice\":false,\"Quantity\":3,\"TaxRate\":0.19,\"DiscountPercentage\":0.0459,\"DiscountAmount\":1.79,\"VariantName\":\"Dunkelgr\\u00FCn\",\"Ean\":\"4052025946869\",\"ArticleName\":\"H\\u00E4ngematte Outdoor\",\"ImageUrl\":\"https://media.relaxdays.de/images/800/10023673_747_1_eef7e2122d6f72d85dc705d79abab171.jpg\",\"TotalPositionPriceGross\":37.18},{\"Id\":569729,\"VorPosId\":40912515,\"ArticleNumber\":\"10023622\",\"VariantId\":0,\"PricePerUnit\":12.41,\"IsNetPrice\":false,\"Quantity\":1,\"TaxRate\":0.19,\"DiscountPercentage\":0.0454,\"DiscountAmount\":0.59,\"VariantName\":\"\",\"Ean\":\"4052025236229\",\"ArticleName\":\"Digitale Feinwaage Mini\",\"ImageUrl\":\"https://media.relaxdays.de/images/800/10023622_0_1_008bae378d5fb60eedfe886d63081f30.jpg\",\"TotalPositionPriceGross\":12.4}],\"RefundedThrough\":null,\"User\":null,\"ProcessParentId\":null}"
}, {
    id: "R-AP-1531",    
    name: "AccountingProcess",
    date: "2024-01-17T18:38:41.419527",    
    employee: "Buch Haltung",
    service: "service",    
    type: "Other",
    tags: null,    
    details: "{\"CancellationInvoiceReceiptPositions\":[],\"CreditReceiptPositions\":[{\"Id\":260286,\"RefundReason\":\"Dispute\",\"VorPosId\":42823193,\"ArticleNumber\":\"10025630\",\"VariantId\":917,\"PricePerUnit\":19.98,\"IsNetPrice\":false,\"Quantity\":1,\"TaxRate\":0.19,\"DiscountPercentage\":0,\"DiscountAmount\":0,\"VariantName\":\"Farbwechsel\",\"Ean\":\"4052025935634\",\"ArticleName\":\"Gartenleuchte Glaskugel 4er Set\",\"ImageUrl\":\"https://media.relaxdays.de/images/800/10025630_917_1_2ed77a83d03c0e985e3a8271994077c6.jpg\",\"TotalPositionPriceGross\":0}],\"ShippingCosts\":0,\"Id\":1531,\"FinishTime\":\"2024-08-29T18:39:18.80985\",\"User\":\"Artem Chepurniak\",\"RefundedThrough\":\"SFirm\",\"StartTime\":\"2024-08-29T18:38:41.419527\",\"CreditReceiptIds\":[114257447],\"CancellationInvoiceReceiptIds\":[]}"
  }, {
    id: "E-3",
    name: "AddressChange",
    date: "2024-01-27T15:35:56.891968+01:00",
    employee: "User Name",
    service: "sevice",
    type: "Other",
    tags: null,
    details: "{\"OldAddress\":{\"Title\":null,\"Addition\":\"\",\"Name1\":\"Anette\",\"Name2\":\"Altmann\",\"Road\":\"Altstr. 3\",\"Postcode\":\"12345\",\"City\":\"Altstadt\",\"District\":null,\"Country\":\"DE\",\"Email\":null,\"Telefon\":null},\"NewAddress\":{\"Title\":\"\",\"Addition\":\"\",\"Name1\":\"Neura\",\"Name2\":\"Neumeier\",\"Road\":\"Neustr. 2\",\"Postcode\":\"54321\",\"City\":\"Neustadt\",\"District\":\"\",\"Country\":\"DE\",\"Email\":\"string\",\"Telefon\":\"string\"},\"ChangeReason\":\"Kundenwunsch\"}"
  }, {
    id: "R-NRP",    
    name: "NotedReplacement",
    date: "2024-01-28T18:43:19.070757",    
    employee: "User Name",
    service: "service",    
    type: "ReplacementRelated",
    tags: null,    
    details: "{\"StartTime\":\"2024-08-29T18:43:19.070757\",\"FinishTime\":\"2024-08-29T18:43:40.684205\",\"LastActionTime\":\"2024-08-29T18:43:40.684205\",\"ProcessorName\":\"Artem Chepurniak\",\"LastProcessorName\":\"Artem Chepurniak\",\"NotedPosition\":[{\"QuantityAnnounced\":1,\"ArticleNumber\":\"10023827\",\"VariantId\":864,\"ReplacementReason\":\"Defect\",\"ShouldNotBeReturnedReason\":0,\"ShouldBeReturned\":false}]}"
  },  {
    id: "R-CRP-0",    
    name: "CreatedReplacement",
    date: "2024-01-28T18:43:40.669866",    
    employee: null,
    service: "service",    
    type: "ReplacementRelated",
    tags: null,    
    details:"{\"OrderId\":0,\"ServiceReceiptId\":0,\"OrderReceiptPositions\":[{\"ReceiptId\":65188271,\"Id\":15227145,\"VorPosId\":0,\"ArticleNumber\":\"10023827\",\"VariantId\":864,\"PricePerUnit\":0,\"IsNetPrice\":false,\"Receipt\":null,\"RowVersion\":0,\"Quantity\":1,\"TaxRate\":0,\"DiscountPercentage\":0,\"DiscountAmount\":0,\"TotalPositionPriceGross\":0}],\"ReceiptDate\":\"2024-08-29T18:43:40.669866\",\"ProcessorName\":null,\"ReplacementEmailSent\":false}"
  },
]

export { operationEventsExample };
