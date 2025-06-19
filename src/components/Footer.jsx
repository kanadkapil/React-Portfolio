import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer sm:footer-horizontal footer-center backdrop-blur-sm text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer