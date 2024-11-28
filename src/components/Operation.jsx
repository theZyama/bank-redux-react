import {useState} from "react";

const Operation = ({deposit, withDraw}) => {
    const [sum, setSum]= useState(`1`);

    return (
        <div>
            <button onClick={()=> withDraw(sum)}>Withdraw</button>
            <input
                type={`number`}
                onChange={e=> setSum(+e.target.value)}
                value={sum}
            />
            <button onClick={()=> deposit(sum)}>Deposit</button>
        </div>
    );
};

export default Operation;