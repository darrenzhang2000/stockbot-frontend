import React, { useEffect } from 'react'
import axios from 'axios'
import qs from 'qs'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'


const TransactionPage = (props) => {
    const [transactions, setTransactions] = React.useState([])

    const getTransactions = () => {
        var headers = {
            'accept': 'application/json',
            'X-API-KEY': 'm3a4Yjdgrx4hk0LBwFLnz9JPbIdhZE965VasGCNc'
        };

        var data = {
            email: 'testuser@gmail.com',
        }

        var options = {
            method: 'GET',
            url: 'https://morning-brushlands-41565.herokuapp.com/transactions/',
            headers: headers,
            params: data
        };

        axios(options).then(res => {
            setTransactions(res.data.transactions)
            console.log(transactions)
        })
    }

    useEffect(() => {
        console.log('transactions page')
        getTransactions()
    }, [])

    return (
        <div>
            <Typography variant="h4"  className="font-link" sx={{marginBottom: '32px'}}> Transactions Page</Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>date</TableCell>
                                <TableCell>action</TableCell>
                                <TableCell>price</TableCell>
                                <TableCell>quantity</TableCell>
                                <TableCell>ticker</TableCell>
                            </TableRow>
                         </TableHead>
                         <TableBody>
                    {
                        transactions.map(transaction => <TableRow> 
                            <TableCell>{new Date(transaction.dateTime).toLocaleString()}</TableCell>
                            <TableCell>{transaction.action}</TableCell>
                            <TableCell>{transaction.price.$numberDecimal}</TableCell>
                            <TableCell>{transaction.quantity}</TableCell>
                            <TableCell>{transaction.ticker}</TableCell>
                        </TableRow>)
                    }
                        </TableBody>
                    </Table>
                </TableContainer>
        </div>
    )
}

export default TransactionPage
