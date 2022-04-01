export default function MandaSalve({ nome }) {
    function salve(nomeQualquer) {
        return `Salve ${nomeQualquer}`
    }

    return (
        <>
            {nome && <p>{salve(nome)}</p>
                //se nao houver nome eles nao roda
            }
        </>
    );
}