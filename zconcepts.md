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