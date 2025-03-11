import '../Styles/CarOptions.css'
import brands from '../Data/Brands.js'
import PropTypes from 'prop-types'


function Brand({brand}){

       return( 
        <>
       <div>
          <img src={brand.image}/>
          {brand.name}
        </div>
        </>          
       )
}

Brand.PropTypes = {
  brand: PropTypes.object
}
export default function CarOptions(){
  
  return(
    <div className="productsgrid">
      {brands.map( brand=>{ return(
        <Brand key={brand.id} brand={brand} />
      )}
      )}
      
    </div>
  )
}

