import { useEffect, useState } from "react";

interface Item {
    id: string;
    item: string;
}

export const Closure = () => {
    const [lists, setLists] = useState<Item[]>([]);
    const [filter, setFilter] = useState<string>("");
    const [githubRepos, setGithubRepos] = useState<string[]>([]);

    // NÃO precisamos criar um novo estado para fazer o filtro, basta armazenar em uma variável e chamá-la onde precisarmos
    // const [filteredGithubRepos, setFilteredGithubRepos] = useState<string[]>([])

    function addToList() {
        setLists((state) => [
            ...state,
            {
                id: String(new Date().getTime()),
                item: `New Item`,
            },
        ]);
        // se tentarmos acessar list, vai vir com um estado atrasado, devido ao funcionamento da closure
        // Comportamento do React em relação ao estado. Quando chamamos setLists, a atualização do estado é assíncrona. Isso significa que o novo valor de lists não estará imediatamente disponível logo após chamar setLists.
        // Para resolvermos esse problema devemos utilizar useEffect, que traz o estado atualizado
        console.log(`Dentro de uma função: ${JSON.stringify(lists)}`);
    }

    function removeFromList(id: string) {
        console.log(id);
        setLists((state) => state.filter((st) => st.id !== id));
    }

    // o useEffect ativa na criação do componente e na atualização de sua dependência
    useEffect(
        () => {
            // Para que o a função não seja chamada no início
            // Para verificar se um objeto possui propriedades
            if (Object.keys(lists).length > 0) {
                console.log(`Dentro do useEffect: ${JSON.stringify(lists)}`);
            }
        },
        // Passamos dados para o array de dependências para informar quais dados devem ser acompanhados, quando ocorrer uma mudança nesse dado o useEffect vai chamar sua função interna
        [lists]
    );

    useEffect(
        () => {
            console.log("Renderiza APENAS na inicialização!");
        },
        // O array vazio faz com que o useEffect renderize APENAS uma vez
        // Utilizamos, principalmente, para chamadas ÚNICAS a API
        []
    );

    useEffect(() => {
        fetch('https://api.github.com/users/diego3g/repos')
            .then(response => response.json())
            .then((data) => {
                setGithubRepos(data.map((item: any) => item.full_name))
            })
            .catch()
    }, [])

    // useEffect(() => {
    //     // Temos um problema nesse useEffect, toda vez que renderizamos o estado, todo o componente é renderizado novamente

    //     // SEMPRE que criamos uma informação a partir de um estado, NÃO devemos criar um novo estado para armazenar essa informação
    //     setFilteredGithubRepos(githubRepos.filter((item) => item.includes(filter)))
    // }, [filter])

    // se armazenarmos em uma variável esse valor
    // dessa forma evitamos novas renderizações dentro do react
    const filteredGithubRepos1 = githubRepos.filter((item) => item.includes(filter))

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setFilter(e.target.value)}
                value={filter}
            />
            <div style={{ display: "flex", alignItems: "flex-start" }}>
                <button onClick={addToList}>Add to list</button>
                <ul>
                    {lists.map(({ id, item }, index) => (
                        <li key={id}>
                            {index}-{item}
                            <button
                                type="button"
                                onClick={() => removeFromList(id)}
                            ></button>
                        </li>
                    ))}
                </ul>
                <ul>
                    {githubRepos.map((item, index) => (
                        <li key={index}>
                            {index}-{item}
                            <button
                                type="button"
                                onClick={() => removeFromList(String(index))}
                            ></button>
                        </li>
                    ))}
                </ul>
                <ul>
                    {filteredGithubRepos1.map((item, index) => (
                        <li key={index}>
                            {index}-{item}
                            <button
                                type="button"
                                onClick={() => removeFromList(String(index))}
                            ></button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
