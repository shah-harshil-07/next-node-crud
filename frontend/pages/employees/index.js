import dashboard from '../../styles/employees/Dashboard.module.css';

const employeeList = () => {
    return (
        <div className={dashboard.body}>
            <div className={dashboard.container}>
                <table id={dashboard['table']}>
                    <thead id={dashboard['thead']}>
                        <tr className={dashboard['tr']}>
                            <th className={dashboard['th']}>Column 1</th>
                            <th className={dashboard['th']}>Column 2</th>
                            <th className={dashboard['th']}>Column 3</th>
                            <th className={dashboard['th']}>Column 4</th>
                            <th className={dashboard['th']}>Column 5</th>
                        </tr>
                    </thead>

                    <tbody id={dashboard['tbody']}>
                        <tr className={dashboard['tr']}>
                            <td className={dashboard['td']}>Cell 1</td>
                            <td className={dashboard['td']}>Cell 2</td>
                            <td className={dashboard['td']}>Cell 3</td>
                            <td className={dashboard['td']}>Cell 4</td>
                            <td className={dashboard['td']}>Cell 5</td>
                        </tr>

                        <tr className={dashboard['tr']}>
                            <td className={dashboard['td']}>Cell 1</td>
                            <td className={dashboard['td']}>Cell 2</td>
                            <td className={dashboard['td']}>Cell 3</td>
                            <td className={dashboard['td']}>Cell 4</td>
                            <td className={dashboard['td']}>Cell 5</td>
                        </tr>

                        <tr className={dashboard['tr']}>
                            <td className={dashboard['td']}>Cell 1</td>
                            <td className={dashboard['td']}>Cell 2</td>
                            <td className={dashboard['td']}>Cell 3</td>
                            <td className={dashboard['td']}>Cell 4</td>
                            <td className={dashboard['td']}>Cell 5</td>
                        </tr>

                        <tr className={dashboard['tr']}>
                            <td className={dashboard['td']}>Cell 1</td>
                            <td className={dashboard['td']}>Cell 2</td>
                            <td className={dashboard['td']}>Cell 3</td>
                            <td className={dashboard['td']}>Cell 4</td>
                            <td className={dashboard['td']}>Cell 5</td>
                        </tr>

                        <tr className={dashboard['tr']}>
                            <td className={dashboard['td']}>Cell 1</td>
                            <td className={dashboard['td']}>Cell 2</td>
                            <td className={dashboard['td']}>Cell 3</td>
                            <td className={dashboard['td']}>Cell 4</td>
                            <td className={dashboard['td']}>Cell 5</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default employeeList;
