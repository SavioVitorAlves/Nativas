const { MercadoPagoConfig, Preference } = require('mercadopago');

async function ApiMercadoPago() {
  try {
    // Step 2: Initialize the client object
    const client = new MercadoPagoConfig({ accessToken: 'CZ24FHqZm7Jx8R3Cy7O8ApjR0LF5jrwB', options: { timeout: 5000, idempotencyKey: 'abc' } });

    // Step 3: Initialize the API object
    const preference = new Preference(client);

    // Step 4: Create the request object
    const body = {
      items: [
        { id: '1', title: 'carro', quantity: 1, currency_id: 'BRL', unit_price: 2000 }
      ],
      back_urls: {
        success: 'http://192.168.100.101:3000/shipping',
        failure: 'http://192.168.100.101:3000/shipping',
        pending: 'http://192.168.100.101:3000/shipping',
      },
      auto_return: 'all'
    };

    // Step 5: Create the preference and handle response
    const response = await preference.create({ body });
    console.log(response); // Para depuração, mas não necessário no código final

    // Supondo que o link desejado esteja em response.body.init_point
    return response.init_point;
  } catch (error) {
    console.error('Erro ao criar a preferência:', error);
    throw error;
  }
}

module.exports = ApiMercadoPago;
