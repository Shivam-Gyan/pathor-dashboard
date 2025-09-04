
# 🛍️ Pathor Dashboard

A modern **e-commerce mini dashboard** built with **Next.js 15 (App Router)**, **TailwindCSS**, and **ShadCN UI**.
It allows users to browse products, filter/search, view details, and manage a shopping cart with increment/decrement support.

---

## ✨ Features

✅ **Product Dashboard**

* Grid view of products
* Search bar (real-time filter)
* Category dropdown filter
* Pagination with "Load More"

✅ **Product Management**

* Modal to **create new products**
* Newly created products available immediately in dashboard & detail page

✅ **Product Details**

* Dedicated page for each product (`/product/[id]`)
* Shows title, category, description, price
* Related products section

✅ **Cart Management**

* Add items to cart from product card or detail page
* Increment / decrement quantity
* Remove items
* Cart summary with total items & price

✅ **Responsive UI**

* Built with **TailwindCSS**
* ShadCN UI components (Button, Card, Input, Dialog, DropdownMenu)
* Fully responsive (mobile → desktop)

---

## 📂 Project Structure

```
/app
 ├── layout.tsx            # Global layout with Navbar + Providers
 ├── page.tsx              # Home page (hero + CTA)
 ├── dashboard/page.tsx    # Product listing page
 ├── product/[id]/page.tsx # Product detail page
 ├── cart/page.tsx         # Cart page

/components
 ├── Navbar.tsx            # Top navigation bar with cart badge
 ├── ProductCard.tsx       # Reusable card for products
 ├── SearchBar.tsx         # Search input
 ├── CategoryFilter.tsx    # Category dropdown
 └── ui/                   # ShadCN UI components

/context
 ├── CartContext.tsx       # Manages cart state with reducer
 └── ProductsContext.tsx   # Manages global products list

/lib
 └── api.ts                # Centralized API fetch calls
```

---

## 🛠️ Instructions to Run Locally

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/pathor-dashboard.git
   cd pathor-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Next.js Images**
   In `next.config.js`, we already allow external images from `fakestoreapi.com`.
   Add other domains if needed.

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Visit [http://localhost:3000](http://localhost:3000).

---

## 📝 Additional Notes

* **State Management:**

  * Cart uses **Context + Reducer**
  * Products use **Context (with fallback to API)**
* **Styling:**

  * TailwindCSS for layout + responsiveness
  * ShadCN UI for consistent professional UI components
* **Data Source:**

  * Default products fetched from [Fake Store API](https://fakestoreapi.com/)
  * New products are added to context state (can persist to localStorage if needed)


