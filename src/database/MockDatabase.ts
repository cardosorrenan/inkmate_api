class MockDatabase {
  get(litersInk) {
    return {
      'results': [
        {
          'volume': '18 L',
          'qtd_total': Math.ceil(litersInk / 18),
          'price_un': 190,
          'price': Math.ceil(litersInk / 18) * 190,
        },
        {
          'volume': '3.6 L',
          'qtd_total': Math.ceil(litersInk / 3.6),
          'price_un': 70,
          'price': Math.ceil(litersInk / 3.6) * 70,
        },
        {
          'volume': '2.5 L',
          'qtd_total': Math.ceil(litersInk / 2.5),
          'price_un': 55,
          'price': Math.ceil(litersInk / 2.5) * 55
        },
        {
          'volume': '0.5 L',
          'qtd_total': Math.ceil(litersInk / 0.5),
          'price_un': 25,
          'price': Math.ceil(litersInk / 0.5) * 25,
        }
      ]
    }
  }
}

export { MockDatabase }