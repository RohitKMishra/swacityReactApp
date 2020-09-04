import React from 'react';
import styled from 'styled-components';
import {useTable, usePagination} from 'react-table';

const Styles = styled.div`
  display: block;
  max-width: 100%;
  padding: 1rem;
  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    border-bottom: 1px solid black;
  }
  table {
    width: 100%;
    text-align: center;
    border-spacing: 0;
    thead {
      background-color: #c7c7cc;
      th {
        margin-bottom: 1rem;
        padding: 1rem 0.5rem;
      }
    }

    tbody {
      tr {
        :nth-child(odd) {
          background-color: rgba(30, 50, 233, 0.32);
        }
        :nth-child(even) {
          background-color: rgba(30, 50, 233, 0.1);
        }
      }
    }
    td {
      margin: 0;
      padding: 0.5rem;
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;

function Table({columns, data}) {
  // Use the state and functions returned from useTable to build  UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // page contains all Rows of the Specific page of the Pagination.
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {pageIndex, pageSize},
  } = useTable(
    {
      columns,
      data,
      initialState: {pageIndex: 0},
    },
    usePagination,
  );

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* ================================Pagination-UI============================= */}

      <div className='pagination'>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{width: '100px'}}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}>
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

function TableWrapper({columns, data}) {
  return (
    <Styles>
      <div className='tableWrap'>
        <Table columns={columns} data={data} />
      </div>
    </Styles>
  );
}

export default React.memo(TableWrapper);
