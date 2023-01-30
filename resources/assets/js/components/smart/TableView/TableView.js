import React from "react";

const NotificationsView = ({ render, headers, items }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {headers.map((item) => (
                        <th key={item.name} scope="col">
                            {item}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>{items.map(render)}</tbody>
        </table>
    );
};

export default NotificationsView;
