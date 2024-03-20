import { SVGProps } from "react";


// export function ( { width, height, ...props }: SVGProps<SVGSVGElement>) {
//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-400" width={width} height={height} viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7.005 8V6a5 5 0 0 1 10 0v2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm0 2h-2v10h14V10h-2v2h-2v-2h-6v2h-2zm2-2h6V6a3 3 0 0 0-6 0z"></path></svg>
//     )
// }

export const CartIcon = ({ width, height, ...props }: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} color={"#000000"} fill={"none"} {...props}>
        <path d="M3.06164 14.4413L3.42688 12.2985C3.85856 9.76583 4.0744 8.49951 4.92914 7.74975C5.78389 7 7.01171 7 9.46734 7H14.5327C16.9883 7 18.2161 7 19.0709 7.74975C19.9256 8.49951 20.1414 9.76583 20.5731 12.2985L20.9384 14.4413C21.5357 17.946 21.8344 19.6983 20.9147 20.8491C19.995 22 18.2959 22 14.8979 22H9.1021C5.70406 22 4.00504 22 3.08533 20.8491C2.16562 19.6983 2.4643 17.946 3.06164 14.4413Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.5 9L7.71501 5.98983C7.87559 3.74176 9.7462 2 12 2C14.2538 2 16.1244 3.74176 16.285 5.98983L16.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);