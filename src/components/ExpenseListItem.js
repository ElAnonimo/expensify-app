import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

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
				<td style={{border: '1px solid blue'}}>{amount}</td>
				<td style={{border: '1px solid blue'}}>{description}</td>
				<td style={{border: '1px solid blue'}}>{createdAt}</td>
				<td><Link to={`/edit/${id}`}>edit</Link></td>
			</tr>
		</tbody>
	</table>
);

export default ExpenseListItem;
