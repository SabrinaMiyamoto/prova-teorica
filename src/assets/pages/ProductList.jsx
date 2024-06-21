import PropTypes from 'prop-types';


const ProductList = ({ products, onNewProductClick }) => {
  if (!products || products.length === 0) {
    return <div style={{textAlign: "center"}}>Nenhum produto disponível.</div>;
  }

  const sortedProducts = [...products].sort((a, b) => {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });

  return (
    <div>
      <h2>Produtos:</h2>
 
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Disponibilidade</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((product) => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>R$ {Number(product.price).toFixed(2)}</td>
              <td>{product.available ? 'Sim' : 'Não'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
  onNewProductClick: PropTypes.func.isRequired,
};

export default ProductList;
