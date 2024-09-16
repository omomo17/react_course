// この章で学ぶこと
// fetchの使い方(HTTPリクエスト)、リクエスト返答待機中の状態を管理する方法（入力無効化）、useEffectの使い方

import { useEffect, useState } from "react";

export default function App() {

    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("EUR");
    const [toCurrency, setToCurrency] = useState("USD");
    const [converted, setConverted] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(function () {
        async function convert() {
            setIsLoading(true);
            const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
            const data = await response.json();
            setConverted(data.rates[toCurrency]);
            setIsLoading(false);
        }

        if(fromCurrency === toCurrency) {
            return setConverted(amount);
        }

        //入力された文字が数字でない場合、変換処理を行わない
        if(isNaN(amount)) {
            return setAmount(0);
        }

        convert();
    }, [amount, fromCurrency, toCurrency]);

    return (
        <div>
            <input type="text" value={amount} onChange={e => setAmount(Number(e.target.value))} disabled={false/*isLoading*/} />
            <select value={fromCurrency} onChange={e => setFromCurrency(e.target.value)} disabled={isLoading}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <select value={toCurrency} onChange={e => setToCurrency(e.target.value)} disabled={isLoading}>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="CAD">CAD</option>
                <option value="INR">INR</option>
            </select>
            <p>{converted} {toCurrency}</p>
        </div>
    )
}