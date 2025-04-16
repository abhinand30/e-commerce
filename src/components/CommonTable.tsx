import React from 'react'
import { commonTableProps } from '../common/type/types';

const CommonTable: React.FC<commonTableProps> = (props) => {
    const { data, header, } = props;

    return (
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <thead>
                <tr className="bg-gray-200 dark:bg-gray-700">
                    {header.map((item) => (
                        <th key={item.id} 
                            className="px-4 py-3 text-left text-gray-600 dark:text-gray-300">
                            {item.title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>

                {data.map((row) =>
                    <tr key={row.id}
                        className="buser-b bg-gray-900 hover:bg-black-100 dark:hover:bg-gray-700"
                    >
                        {header.map(({ selector,cell }, idx) =>
                            (cell?
                                <td key={idx} className="px-4 py-3 text-white">{cell(row)}</td>
                            :
                                <td key={idx} className="px-4 py-3 text-white">{row[selector]}</td>
                            ) 
                        )}
                    </tr>
                )}

            </tbody>
        </table>
    )
}

export default CommonTable