
import { FunctionComponent } from "react";

interface InfoCardProps {
    value : string | number , 
    
    description :string , 
  
}
 
const InfoCard: FunctionComponent<InfoCardProps> = ({value,description}) => {
    return ( 
        <div className="flex flex-col items-center">
            <div className="text-2xl">
            {value}
            </div>
            <div className="text-xl opacity-55">
            {description}
            </div>
            
        </div>
     );
}
 
export default InfoCard;