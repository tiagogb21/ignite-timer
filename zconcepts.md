# Conceitos:

A diferença entre Link e NavLink do react-router-dom é que o NavLink coloca uma classe no link ativo

NavLink --> <a href="..." class="active">

Essa classe permite estilizar o link ativo

Para fazer o autocomplete de um input podemos passar:

    <input type="text" list="task-suggestions" />

    <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
    </datalist>

js NÃO consegue ler objetos ts, apenas a tipagem do objeto

    NÃO funciona:

        statusColor: keyof STATUS_COLOR

    funciona:

        statusColor: keyof typeof STATUS_COLOR

    obs.: devemos trabalhar com tipagem, por que evita ter que aumentar toda vez que acrescentarmos algo novo no objeto

    ex.: ao invés de 'red', 'green', ...

    pega todas as chaves que foram passadas

## Hook

    * Funções que começam com 'use'

    * Funções que acomplam uma funcionalidade a um componente existente

## Form

1. Controlled:

    * Manter em tempo real o estado do componente

    - Toda vez que um usuário inserir uma informação, o estado é atualizado com esse novo valor

    - Toda vez que um estado é atualizado, o react precisa recalcular todos os dados do componente

2. Uncontrolled:

    * Buscamos a informação APENAS quando precisamos dela

    - NÃO monitoramos o valor digitado em tempo real

## React Hook Form

1. componentes

    * useForm --> é como se estivessemos criando um novo formulário na aplicação

    * watch --> vai assistir as mudanças que ocorreram em um input

    * register --> método que adiciona um input ao formulário

        - informa quais campos irão existir no formulário

    --> nomeando um input:

        {...register('name')} --> coloca várias propriedades no input, como name

    --> register retorna um objeto com métodos para trabalhar com o input

        {
            onChange: () => void,
            onBlur: () => void,
            onFocus: () => void,
        }

        - É o mesmo que fazer:

            onChange={() => handleChange}
            onBlur={() => handleBlur}
            onFocus={() => handleFocus}

--> Podemos indicar o tipo de valor que será recebido:

    {...register("minutesAmount", { valueAsNumber: true })}


Eu quero que a variável de minutos comece com 0 caso a primeira casa não seja preenchida

    const minutes = String(minutesAmount).padStart(2, '0')

    --> Estou informando: caso não tenha 2 caracteres, preencha no início com '0'


useEffect --> Side-effect --> Efeito Colateral - uma ação que acontece devido a uma ação anterior
