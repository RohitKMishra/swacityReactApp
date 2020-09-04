import React, {useContext} from 'react';
import Table from '../../components/Table/table';
//context consumer
import {Context as DepartmentContext} from '../../Context/DepartmentContext';

export default function Department() {
  const {state: DepartmentListState} = useContext(DepartmentContext);
  console.log(DepartmentListState);
  return (
    <div>
      <Table
        data={DepartmentListState.departments}
        columns={departmentListColumns}
      />
    </div>
  );
}

const departmentListColumns = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Person in Charge',
    accessor: 'inCharge.name',
  },
  {
    Header: 'Total Workers',
    accessor: 'totalWorkers',
  },
  {
    Header: 'Total SuperVisor',
    accessor: 'totalSuperVisors',
  },
  {
    Header: 'Total Assets',
    accessor: 'totalAssets',
  },
];
