import type { Application } from "../model/application.types"

export const ApplicationToProcess = ({application}: {application: Application}) => {
    return <tr className="h-[100px] justify-between border-2 border-cyan-dark px-2 overflow-y-auto">
        <td className="text-center px-2">
            <input type="checkbox" checked={application.isResolved} className="mx-auto appearance-none bg-transparent w-[24px] aspect-square m-0 border-2 border-white rounded-sm grid place-content-center before:bg-cyan-dark before:[content:''] before:w-[16px] before:aspect-square before:scale-0 before:transition-all checked:before:scale-100"/>
        </td>
        <td className="text-center px-2">
            <span>{application.name + ' ' + application.surname}</span>
        </td>
        <td className="text-center px-2">
            <span>{application.preferred_date}</span>
        </td>
        <td className="text-center px-2">
            <span>{application.preferred_time}</span>
        </td>
        <td className="text-center px-2">
            <a className="w-[50px] md:w-auto overflow-hidden text-ellipsis" href={`tel:${application.phone}`}>{application.phone}</a>
        </td>
    </tr>
}