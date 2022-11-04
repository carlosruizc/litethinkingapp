import { Navigate, Route, Routes } from "react-router-dom";
import { NewCompanyPage } from "../pages/NewCompanyPage";
import { CompanyInfoPage } from "../pages/CompanyInfoPage";
import { CompaniesListPage } from "../pages/CompaniesListPage";
import { NewItemPage } from "../pages/NewItemPage";
import { ItemsListPage } from "../pages/ItemsListPage";
import { Navbar } from "../components/Navbar";
import { ItemInfoPage } from "../pages/ItemInfoPage";
import { EditCompanyInfoPage } from "../pages/EditCompanyInfoPage";

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="companies" element={<CompaniesListPage />} />
        <Route path="companies/company/:id" element={<CompanyInfoPage />} />
        <Route path="itemslist/item" element={<ItemInfoPage />} />
        <Route path="newcompany" element={<NewCompanyPage />} />
        <Route path="newitem" element={<NewItemPage />} />
        <Route path="editcompany" element={<EditCompanyInfoPage />} />

        <Route path="itemslist" element={<ItemsListPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
