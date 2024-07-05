import React, { useState, useEffect } from 'react';
import ApiMercadoPago from '../apis/ApiMercadoPago';

const Pagamento = () => {
  const [link, setLink] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLink = async () => {
      try {
        const linkObtido = await ApiMercadoPago();
        setLink(linkObtido);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchLink();
  }, []);

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      {link ? (
        <div>Link retornado pela API: <a href={link}>{link}</a></div>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
};

export default Pagamento
