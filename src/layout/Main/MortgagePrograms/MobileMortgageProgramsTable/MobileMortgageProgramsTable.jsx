/* eslint-disable react/prop-types */
import { MobileMortgageProgramsTableItem } from './MobileMortgageProgramsTableItem/MobileMortgageProgramsTableItem';

import './MobileMortgageProgramsTable.style.css';

export const MobileMortgageProgramsTable = ({ mortgages }) => {
  return (
    <div className='mobile-mortgage-programs-table'>
        {mortgages.map((mortgage, index) => (
            <MobileMortgageProgramsTableItem 
                key={index}
                mortgage={mortgage}
            />
        ))}
    </div>
  )
}