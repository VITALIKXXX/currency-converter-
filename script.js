{
    const calculateResult = (money, currency) => {

        const EUR = 4.7037;

        const USD = 4.5971;

        switch (currency) {

            case "EUR":
                return money / EUR;

            case "USD":
                return money / USD;
        }
    };

    const updateResultText = (result, currency) => {

        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = `${result.toFixed(2)}${currency}`;

    }

    const onFormSubmit = (event) => {

        event.preventDefault();

        const moneyElement = document.querySelector(".js-money");

        const currencyElement = document.querySelector(".js-currency");

        const money = +moneyElement.value;

        const currency = currencyElement.value;

        const result = calculateResult(+moneyElement.value, currencyElement.value)

        updateResultText(result, currency,);
    };

    const init = () => {

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

    };
    init();

}