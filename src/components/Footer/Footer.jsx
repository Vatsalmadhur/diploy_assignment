import React from 'react';

const Footer = () => {
    const integrations = [
        "Shopify", "Etsy", "eBay", "Amazon", "TikTok Shop",
        "PrestaShop", "BigCommerce", "Wix", "WooCommerce", "Squarespace",
        "Printify API"
    ];

    const discover = [
        "Blog", "Guides", "Products",
        "Etsy print-on-demand", "Shopify print-on-demand",
        "WooCommerce print-on-demand", "Wix print-on-demand",
        "Squarespace print-on-demand", "Make Your Own Shirt", "Brands"
    ];

    const startSelling = [
        "Custom T-shirts", "Custom Hoodies", "Custom Mugs",
        "Custom Socks", "Custom Backpacks", "Custom Branding",
        "Sell on Etsy", "Sell on Social Media",
        "Free T-shirt Designs", "Custom Products",
        "Custom All-Over-Print Hoodies"
    ];

    const renderList = (items) => (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );

    return (
        <footer className="bg-gray-200 p-10 text-sm text-gray-700 px-10 flex items-center justify-center flex-col ">
            <div className='flex items-center justify-between flex-wrap my-10 gap-10 w-[70vw] pb-10'>

            <img src="assets/logo.png" alt="" className='w-[200px]' />
            <div className='flex gap-5 items-center justify-center '>
                <img src="assets/social/facebook.png" alt="" className='w-[35px] h-[35px] '/>
                <img src="assets/social/instagram.png" alt="" className='w-[35px] h-[35px]'/>
                <img src="assets/social/linkedin.png" alt="" className='w-[35px] h-[35px]'/>
                <img src="assets/social/reddit.png" alt="" className='w-[35px] h-[35px]'/>
                <img src="assets/social/twitter.png" alt="" className='w-[35px] h-[35px]'/>
                <img src="assets/social/tiktok.png" alt="" className='w-[35px] h-[35px]'/>

            </div>

            </div>
            <div className="w-[60vw]  flex items-center justify-around flex-wrap gap-8  ">
                <div className='w-[200px]'>
                    <h5 className="font-bold mb-3">Integrations</h5>
                    {renderList(integrations)}
                </div>
                <div>
                    <h5 className="font-bold mb-3">Discover</h5>
                    {renderList(discover)}
                </div>
                <div>
                    <h5 className="font-bold mb-3">Start Selling</h5>
                    {renderList(startSelling)}
                </div>
            </div>
            <div className="mt-10 border-t border-gray-300 pt-6 text-center ">
                <ul className=" flex items-center justify-center gap-5">
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Security</li>
                    <li>Intellectual Property Rights</li>
                </ul>
                <p className="mt-4">© 2024 Printify. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
