{
    const calculateResult = (money, select) => {
        const EUR = 4.7037;
        const USD = 4.5971;
        switch (select) {
            case "EUR":
                return money / EUR;


            case "USD":
                return money / USD;



        }
    };

    const updateResultText = (result, select) => {
        const resultElement = document.querySelector(".js-form__result");
        resultElement.innerText = `${result.toFixed(2)}${select}`;

    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const moneyElement = document.querySelector(".js-form__money");
        const selectElement = document.querySelector(".js-form__select");


        const money = +moneyElement.value;
        const select = selectElement.value;



        const result = calculateResult(+moneyElement.value, selectElement.value)


        updateResultText(result, select);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

    };
    init();

}