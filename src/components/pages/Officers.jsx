import React, {useState} from 'react';

function Officers(){

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <section class="page-section bg-dark container-fluid text-white">
            <div class="container text-center">
                <h2 class="mb-4">Past and Current Officer Teams!</h2>
                  <button onClick={toggleDropdown}>View Options</button>
          {isOpen && (
            <ul className="container-fluid w-25 list-unstyled">
              <li>Option A</li>
              <li>Option B</li>
              <li>Option C</li>
            </ul>
          )}
            </div>
        </section>
    );
}

export default Officers;