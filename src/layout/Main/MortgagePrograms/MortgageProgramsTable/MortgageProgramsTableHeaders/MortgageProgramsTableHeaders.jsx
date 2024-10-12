import './MortgageProgramsTableHeaders.style.css';

export const MortgageProgramsTableHeaders = () => {
  const headers = ['Программа','Ставка','Первый взнос','Срок, лет','Платеж руб./мес'];

  return (
    <thead>
        <tr className='main__mortgage-programs__table__headers'>
            <th></th>
            {headers.map((header, index) => (
                <th key={index}>{header}</th>
            ))}
            <th></th>
        </tr>
    </thead>
  )
}