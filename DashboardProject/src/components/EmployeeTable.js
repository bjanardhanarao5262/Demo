import React, { useState } from 'react';
import '../styles/EmployeeTable.css';

const EMPLOYEES = [
  { id:'001', name:'Aarav Sharma',  dept:'Engineering', role:'Sr. Developer',   status:'Active',   joined:'Jan 12, 2022', salary:'$92,000', av:'#4E74FF' },
  { id:'002', name:'Priya Nair',    dept:'Design',      role:'UI/UX Designer',  status:'Active',   joined:'Mar 5, 2022',  salary:'$78,000', av:'#FD9A32' },
  { id:'003', name:'Rohan Mehta',   dept:'Marketing',   role:'SEO Specialist',  status:'On Leave', joined:'Jul 19, 2021', salary:'$65,000', av:'#1ABD80' },
  { id:'004', name:'Sneha Pillai',  dept:'Finance',     role:'Accountant',      status:'Active',   joined:'Oct 3, 2020',  salary:'$72,000', av:'#9A55FF' },
  { id:'005', name:'Karan Bose',    dept:'HR',          role:'HR Manager',      status:'Inactive', joined:'Feb 28, 2023', salary:'$68,000', av:'#F7536A' },
  { id:'006', name:'Divya Iyer',    dept:'Engineering', role:'DevOps Engineer', status:'Active',   joined:'Sep 14, 2022', salary:'$88,000', av:'#32C6E2' },
];

const FILTERS = ['All','Active','Inactive','On Leave'];
const STATUS_STYLE = {
  'Active':   { bg:'#E0F8EE', color:'#1ABD80' },
  'Inactive': { bg:'#FFF0E0', color:'#FD9A32' },
  'On Leave': { bg:'#F0E5FF', color:'#9A55FF' },
};

const EmployeeTable = () => {
  const [filter, setFilter]   = useState('All');
  const [search, setSearch]   = useState('');
  const rows = EMPLOYEES.filter(e => {
    const mf = filter === 'All' || e.status === filter;
    const ms = e.name.toLowerCase().includes(search.toLowerCase()) || e.dept.toLowerCase().includes(search.toLowerCase());
    return mf && ms;
  });
  return (
    <div className="table-panel">
      <div className="table-header">
        <div>
          <h3>Recent Employees</h3>
          <span className="table-sub">Showing {rows.length} of {EMPLOYEES.length} records</span>
        </div>
        <div className="table-controls">
          <input className="table-search" placeholder="🔍 Filter employees..." value={search} onChange={e => setSearch(e.target.value)} />
          <div className="filter-pills">
            {FILTERS.map(f => (
              <button key={f} className={`pill ${filter === f ? 'pill--active' : ''}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="table-wrap">
        <table className="emp-table">
          <thead>
            <tr><th>Employee</th><th>Department</th><th>Role</th><th>Status</th><th>Joined</th><th>Salary</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {rows.map((e, i) => (
              <tr key={e.id} className={i % 2 === 0 ? 'row-alt' : ''}>
                <td>
                  <div className="emp-cell">
                    <div className="emp-avatar" style={{ background: e.av }}>{e.name.split(' ').map(w => w[0]).join('')}</div>
                    <div className="emp-info"><span className="emp-name">{e.name}</span><span className="emp-id">ID #{e.id}</span></div>
                  </div>
                </td>
                <td className="td-mid">{e.dept}</td>
                <td className="td-mid">{e.role}</td>
                <td><span className="status-badge" style={STATUS_STYLE[e.status]}>{e.status}</span></td>
                <td className="td-light">{e.joined}</td>
                <td className="td-bold">{e.salary}</td>
                <td><div className="action-btns"><button className="btn-edit">Edit</button><button className="btn-del">Del</button></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;
