import { useState } from "react";

const ProductForm = ({ onProductSubmit }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [available, setAvailable] = useState(true);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            name,
            description,
            price: parseFloat(price),
            available,
        }
        onProductSubmit(newProduct); // Chama a função passada como propriedade
        setName('');
        setDescription('');
        setPrice('');
        setAvailable(true);
    }

    return (
        <div>
            <h1>Cadastrar Produtos</h1>
            <form onSubmit={handleSubmit}>
                <label>Nome do produto: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <label>Descrição: </label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <label>Preço: </label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                <label>Disponibilidade: </label>
                <select value={available} onChange={(e) => setAvailable(e.target.value === 'true')}>
                    <option value={true}>Sim</option>
                    <option value={false}>Não</option>
                </select>
                <button type="submit">Cadastrar Produto</button>
            </form>
        </div>
    );
}

export default ProductForm;
