import React from 'react'

export const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-info'>
                <div>
                    <a href='/' className='navbar-brand'>Gestion de Clientes</a>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent;
