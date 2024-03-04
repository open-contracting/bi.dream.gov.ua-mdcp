import { useEffect } from "react";
import QlikCard from "components/QlikCard";
import QlikObject from "components/QlikObject";

export default function NeedsFulfilmentRate({ title , appDisclaimer , pageTitle, ExportChartFootnote, menuItemsStrings}) {
  useEffect(() => {
    document.title = `${pageTitle} - ${title}`;
  }, [pageTitle,title]);
  return (
    <section className="content">
      <div className="content-header">
        <div className="row mb-2">
          <div className="col-md-10 col-sm-9 col-10">
            <h5 className="page-title"> {title} </h5>
            {/* <QlikObject
              className="page-title"
              id="ANJWBAj"
              height="35px"
              showLoader={false}
            /> */}
          </div>
          {/* <div className="col-md-2 col-sm-3 col-4">
            <QlikObject id="GqNcZ" height="35px" showLoader={false} />
          </div> */}
          {/* <div className="col-md-2 col-sm-3 col-2">
            <QlikObject
              id="NUJuKHt"
              height="30px"
              showLoader={false}
            />
          </div> */}
        </div>
      </div>
          
      {/* <div className="row justify-content-start">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <QlikObject
              id="a49c567e-5174-4fbc-8463-a0e7a6a4ce20"
              height="30px"
              showLoader={false}
            />
          </div>
          <div className="col-xs-13 col-sm-6 col-md-4 col-lg-4">
            <QlikObject
              id="NYxkAp"
              height="40px"
              showLoader={false}
            />
          </div>
      </div> */}

      <div className="container-fluid">

        <div className="row justify-content-start">

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 col-xl-10">

              <div className="row justify-content-left">
                {/* KPIs Row */}

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
                      {/* KPI: required */}
                      <QlikCard
                        id="f64ed3c3-3fce-4407-b88a-abaafdef2d77"
                        // height="90px"
                        height="max(calc(9vh - 1px), 50px)"
                        showHeader={false}
                        showMaximize={false}
                        showExport={false}
                        showOverlayer={false}
                      />
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
                      {/* KPI: commitment */}
                      <QlikCard
                        id="9e491538-ea02-46bd-8339-f5cf3d1adddf"
                        height="max(calc(9vh - 1px), 50px)"
                        showHeader={false}
                        showMaximize={false}
                        showExport={false}
                        showOverlayer={false}
                      />
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
                      {/* KPI: available */}
                      <QlikCard
                        id="8b99abf9-62a4-4d8a-8145-449af8a72acd"
                        height="max(calc(9vh - 1px), 50px)"
                        showHeader={false}
                        showMaximize={false}
                        showExport={false}
                        showOverlayer={false}
                      />
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
                      {/* KPI: disbursed */}
                      <QlikCard
                        id="7d0a804e-a803-42d5-af34-a332972ff120"
                        height="max(calc(9vh - 1px), 50px)"
                        showHeader={false}
                        showMaximize={false}
                        showExport={false}
                        showOverlayer={false}
                      />
                    </div>

              </div>

              <div className="row justify-content-left">
                {/* Dimension selector row */}

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
                      {/* Dimension selector */}
                      <QlikCard
                        id="88685a85-8d16-4178-9b38-4dcffc2afc04"
                        height="40px"
                        showHeader={false}
                        showMaximize={false}
                        showExport={false}
                        showOverlayer={false}
                      />
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-9">
                      <div className="row justify-content-center">
                        <div className="col-12">
                          {/* Colors info */}
                            <QlikCard
                              id="c0f77878-0a3a-49db-9ec4-472307aabcc4"
                              height="40px"
                              showHeader={false}
                              showMaximize={false}
                              showExport={false}
                              showOverlayer={false}
                            />
                        </div>
                      </div>
                    </div>

              </div>



              <div className="row justify-content-left">
                {/* Charts Row */}

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                  {/* barchart column */}
                  <div className="row justify-content-center">
                    <div className="col-12">
                      {/* required vs commitment */}
                      <QlikCard
                        id="d21db31c-92a5-44a8-a7fa-e30da8f513d2"
                        // height="170px"
                        height="max(calc(100vh - 280px - max(calc(9vh - 1px), 50px))/2, 100px)"
                        showHeader={true}
                        showMaximize={false}
                        showExport={false}
                        showPdfExport
                        showImageExport={true}
                        exportImageWidth={1280}
                        exportImageHeight={720}
                        onBeforeExportHandler={async ({ vis, exportType }) => {
                          //console.log(data);
                          console.log(vis);
                          if(exportType in { pdf: true, image: true} && vis)
                            await vis.setOptions({ showTitles: true, footnote: `${ExportChartFootnote}` });
                        }}
                        onAfterExportHandler={async ({ vis, exportType }) => {
                          console.log('Export type: ', exportType);
                          if(exportType in { pdf: true, image: true})
                            vis.setOptions({ showTitles: false, footnote:"" });
                        }}
                        exportText = {menuItemsStrings.exportText}
                        exportCompletedText = {menuItemsStrings.exportCompletedText}
                        closeBtnText = {menuItemsStrings.closeBtnText}
                      />
                    </div>
                  </div>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                  {/* barchart column */}
                  <div className="row justify-content-center">
                    <div className="col-12">
                      {/* commitment vs Available */}
                      <QlikCard
                        id="ecfbba0d-ba78-4391-bc77-88aa388c145b"
                        // height="170px"
                        height="max(calc(100vh - 280px - max(calc(9vh - 1px), 50px))/2, 100px)"
                        showHeader={true}
                        showMaximize={false}
                        showExport={false}
                        showPdfExport
                        showImageExport={true}
                        exportImageWidth={1280}
                        exportImageHeight={720}
                        onBeforeExportHandler={async ({ vis, exportType }) => {
                          //console.log(data);
                          console.log(vis);
                          if(exportType in { pdf: true, image: true} && vis)
                            await vis.setOptions({ showTitles: true, footnote: `${ExportChartFootnote}` });
                        }}
                        onAfterExportHandler={async ({ vis, exportType }) => {
                          console.log('Export type: ', exportType);
                          if(exportType in { pdf: true, image: true})
                            vis.setOptions({ showTitles: false, footnote:"" });
                        }}
                        exportText = {menuItemsStrings.exportText}
                        exportCompletedText = {menuItemsStrings.exportCompletedText}
                        closeBtnText = {menuItemsStrings.closeBtnText}
                      />
                    </div>
                  </div>

                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                  {/* barchart column */}
                  <div className="row justify-content-center">
                    <div className="col-12">
                      {/* available vs disbursed */}
                      <QlikCard
                        id="59bdbf28-fb4f-4d9e-9121-bc42432aa9f8"
                        // height="170px"
                        height="max(calc(100vh - 280px - max(calc(9vh - 1px), 50px))/2, 100px)"
                        showHeader={true}
                        showMaximize={false}
                        showExport={false}
                        showPdfExport
                        showImageExport={true}
                        exportImageWidth={1280}
                        exportImageHeight={720}
                        onBeforeExportHandler={async ({ vis, exportType }) => {
                          //console.log(data);
                          console.log(vis);
                          if(exportType in { pdf: true, image: true} && vis)
                            await vis.setOptions({ showTitles: true, footnote: `${ExportChartFootnote}` });
                        }}
                        onAfterExportHandler={async ({ vis, exportType }) => {
                          console.log('Export type: ', exportType);
                          if(exportType in { pdf: true, image: true})
                            vis.setOptions({ showTitles: false, footnote:"" });
                        }}
                        exportText = {menuItemsStrings.exportText}
                        exportCompletedText = {menuItemsStrings.exportCompletedText}
                        closeBtnText = {menuItemsStrings.closeBtnText}
                      />
                    </div>
                  </div>

                </div>

              </div>

              <div className="row justify-content-left">
                {/* Table Row */}

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  {/* table column */}
                  <div className="row justify-content-center">
                    <div className="col-12">
                      {/* table */}
                      <QlikCard
                        id="e668f267-42ce-450f-b76f-e5945426c2ff"
                        // height="170px"
                        height="max(calc(100vh - 190px - max(calc(9vh - 1px), 50px))/2, 100px)"
                        showHeader={true}
                        showMaximize={false}
                        showExport={true}
                        showPdfExport={false}
                        showImageExport={false}
                        exportImageWidth={1280}
                        exportImageHeight={720}
                        onBeforeExportHandler={async ({ vis, exportType }) => {
                          //console.log(data);
                          console.log(vis);
                          if(exportType in { pdf: true, image: true} && vis)
                            await vis.setOptions({ showTitles: true, footnote: `${ExportChartFootnote}` });
                        }}
                        onAfterExportHandler={async ({ vis, exportType }) => {
                          console.log('Export type: ', exportType);
                          if(exportType in { pdf: true, image: true})
                            vis.setOptions({ showTitles: false, footnote:"" });
                        }}
                        exportText = {menuItemsStrings.exportText}
                        exportCompletedText = {menuItemsStrings.exportCompletedText}
                        closeBtnText = {menuItemsStrings.closeBtnText}
                      />
                    </div>
                  </div>

                </div>

              </div>

            </div>


            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 col-xl-2">
                  {/* FilterPane */}
                  <QlikCard
                    id="157cfddc-d94e-4062-8f17-87a9d1386c52"
                    // height="485px"
                    height="90px"
                    showHeader={false}
                    showMaximize={false}
                    showExport={false}
                    showOverlayer={false}
                  />
                  {/* FilterPane */}
                  <QlikCard
                    id="0808ed65-b6c3-49df-965c-294775a704a4"
                    // height="485px"
                    height="max(calc(100vh - 175px - 90px), 100px)"
                    showHeader={false}
                    showMaximize={false}
                    showExport={false}
                    showOverlayer={false}
                  />

            </div>

          </div>

          {/* <div className="row">
            <div className="col-12">
              <QlikObject
                id="pCefh"
                height="0px"
                showLoader={false}
                showOverlayer={false}
              />
            </div>
          </div> */}
          
        </div>
    </section>
  );
}
