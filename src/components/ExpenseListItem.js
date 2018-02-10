import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, amount, description, createdAt }) => (
	<table>
		<thead>
			<tr>
				<th>ID</th><th>Amount</th><th>Description</th><th>Created at</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td style={{border: '1px solid blue'}}>{id}</td>
				<td style={{border: '1px solid blue'}}>{numeral(amount / 100).format('0,0[.]00 $')}</td>
				<td style={{border: '1px solid blue'}}>{description}</td>
				<td style={{border: '1px solid blue'}}>{moment(createdAt).format('Do MMMM, YYYY')}</td>
				<td><Link to={`/edit/${id}`}>edit</Link></td>
			</tr>
		</tbody>
	</table>
);

export default ExpenseListItem;
