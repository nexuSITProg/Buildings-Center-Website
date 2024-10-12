import { MortgageProgramsTableHeaders } from './MortgageProgramsTableHeaders/MortgageProgramsTableHeaders';
import { MortgageProgramsTableItem } from './MortgageProgramsTableItem/MortgageProgramsTableItem';

import './MortgageProgramsTable.style.css';

// eslint-disable-next-line react/prop-types
export const MortgageProgramsTable = ({ mortgages = new Array(1)}) => {
  return (
    <table className='main__mortgage-programs__table'>
      <MortgageProgramsTableHeaders />
      <tbody>
        {mortgages.map((mortgage, index) => (
          <MortgageProgramsTableItem 
            key={index}
            mortgage={mortgage}
          />
        ))}
      </tbody>
    </table>
  )
}
