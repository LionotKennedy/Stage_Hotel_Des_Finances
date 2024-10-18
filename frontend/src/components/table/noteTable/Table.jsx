import React, {useState, useEffect} from 'react'
import { useGetJournals } from '../../../services/serviceJournal';

import './table.scss'

const Table = props => {

    const { data: journals, refetch, isLoading } = useGetJournals();

    const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData

    const [dataShow, setDataShow] = useState(initDataShow)

    let pages = 1

    let range = []

    if (props.limit !== undefined) {
        let page = Math.floor(props.bodyData.length / Number(props.limit))
        pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }

    const [currPage, setCurrPage] = useState(0)

    const selectPage = page => {
        const start = Number(props.limit) * page
        const end = start + Number(props.limit)

        setDataShow(props.bodyData.slice(start, end))

        setCurrPage(page)
    }

    useEffect(() => {
        if (refetch) refetch(); // Assure-toi que refetch est bien défini
      }, [refetch]);  // Vérifie aussi si c'est nécessaire, ou si tu peux déplacer ça dans `TableArchive`.

      
    return (
        <div>
            <div className="table-wrapper">
                <table className='table_das'>
                    {
                        props.headData && props.renderHead ? (
                            <thead className='thead_das'>
                                <tr className='tr_das'>
                                    {
                                        props.headData.map((item, index) => props.renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                    {
                        props.bodyData && props.renderBody ? (
                            <tbody className='tbody_das'>
                                {
                                    dataShow.map((item, index) => props.renderBody(item, index))
                                }
                            </tbody>
                        ) : null
                    }
                </table>
            </div>
            {
                pages > 1 ? (
                    <div className="table__pagination">
                        {
                            range.map((item, index) => (
                                <div key={index} className={`table__pagination-item ${currPage === index ? 'active' : ''}`} onClick={() => selectPage(index)}>
                                    {item + 1}
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    )
}

export default Table
