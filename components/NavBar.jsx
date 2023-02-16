import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SettingsVector from './Vectors/Settings';

export default function NavBar() {
  return (
    <header>
      <nav class="container">
        <div class="row justify-content-between gap-3 gap-lg-4">
          <div className="col-auto">
            <Link href="#" passHref>
              <button class="navbar-brand aeonik-bold">Vigilantapp</button>
            </Link>
          </div>

          <div className="col-auto r-side">
            <div>
              <SettingsVector />
            </div>

            <div className="details d-flex align-items-center gap-2">
              <div className="dp">
                <Image
                  src={'/icons/nav-dp.png'}
                  alt="dp"
                  height={32}
                  width={32}
                  objectFit="cover"
                  quality={100}
                  priority={true}
                />
              </div>
              <div>
                <h5>Atanda Damilare</h5>
                <h6>Product Designer</h6>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
