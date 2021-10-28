import React, { useEffect } from 'react'
import axios from 'axios'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { AmountInput, StyledInputBase } from './styledInputBase'

const WITHDRAW = "withdraw"
const DEPOSIT = "deposit"

const Account = () => {
    const [amount, setAmount] = React.useState(0)
    const [spendingPower, setSpendingPower] = React.useState(0)

    const getSpendingPower = () => {

        var headers = {
            'accept': 'application/json',
            'X-API-KEY': 'm3a4Yjdgrx4hk0LBwFLnz9JPbIdhZE965VasGCNc'
        };

        var data = {
            email: 'testuser@gmail.com',
        }

        var options = {
            method: 'GET',
            url: 'https://morning-brushlands-41565.herokuapp.com/portfolios/',
            headers: headers,
            params: data
        };

        axios(options).then(res => {
            setSpendingPower(res.data.portfolios[0].spendingPower.$numberDecimal)
        })
    }

    const updateSpendingPower = (amt) => {
        var headers = {
            'Accept': '*/*',
            'Content-Type': '*/*',
            'X-API-KEY': 'm3a4Yjdgrx4hk0LBwFLnz9JPbIdhZE965VasGCNc'
        };

        var data = {
            email: 'testuser@gmail.com',
            amount: amt
        }

        axios.put('https://morning-brushlands-41565.herokuapp.com/portfolios/', data, headers).then(
            res => {
                setSpendingPower(res.data.spendingPower.$numberDecimal)
            }
        )
    }

    const handleUpdateSpendingPower = (e) => {
        e.preventDefault()
        if (e.target.id == WITHDRAW) {
            updateSpendingPower(-amount)
        } else if (e.target.id == DEPOSIT) {
            updateSpendingPower(amount)
        }
    }

    useEffect(() => {
        getSpendingPower()
    }, [])

    return (
        <div>
            <Typography variant="h6" className="font-link">Spending Power: {spendingPower}</Typography>
            {/* <Typography variant="h6" className="font-link">Total Amount: {spendingPower}</Typography> */}
            <AmountInput>
                <StyledInputBase
                    placeholder="1000"
                    onChange={e => setAmount(e.target.value)}
                    value={amount}
                    type="number"
                />
            </AmountInput>
            <Button variant="contained" color="primary" id={DEPOSIT} onClick={handleUpdateSpendingPower}>Deposit Amount</Button>
            <Button variant="contained" color="primary" id={WITHDRAW} onClick={handleUpdateSpendingPower}>Withdraw Amount</Button>
        </div>
    )
}

export default Account
