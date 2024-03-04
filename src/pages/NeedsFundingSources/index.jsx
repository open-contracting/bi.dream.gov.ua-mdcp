import { useEffect } from "react";
import QlikCard from "components/QlikCard";
import QlikObject from "components/QlikObject";

export default function NeedsFundingSources({ title , appDisclaimer , pageTitle, ExportChartFootnote, menuItemsStrings}) {
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
                        id="daa18944-4e2a-437c-bbd8-76edc12958ac"
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
                        id="f18f7f33-7295-42b9-811d-0ed0da527d67"
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
                        id="f32f0bd8-a30c-4bb4-87cb-b0fccd13395b"
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
                        id="5af9fae2-cc0f-40c3-b95a-9f0ff18829e1"
                        height="max(calc(9vh - 1px), 50px)"
                        showHeader={false}
                        showMaximize={false}
                        showExport={false}
                        showOverlayer={false}
                      />
                    </div>

              </div>

              <div className="row justify-content-left">
                    {/* Charts Row */}

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-4">
                      {/* barchart column */}
                      <div className="row justify-content-left">
                        {/* Dimension Selector row */}
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-9">
                          {/* Dimension selector */}
                          <QlikCard
                            id="40b2112f-4ce9-4954-aeac-1bb5c94e1330"
                            height="40px"
                            showHeader={false}
                            showMaximize={false}
                            showExport={false}
                            showOverlayer={false}
                          />
                        </div>

                      </div>
                  <div className="row justify-content-center">
                    <div className="col-12">
                      {/* barchart */}
                      <QlikCard
                        id="91c4437c-d6ba-4229-8bba-edffa5cb3ea7"
                        // height="170px"
                        height="max(calc(100vh - 225px - max(calc(9vh - 1px), 50px)), 200px)"
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
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-8">
                  {/* table column */}
                  <div className="row justify-content-center">
                    <div className="col-12">
                      {/* table */}
                      <QlikCard
                        id="f460c0e4-e9ad-45a1-b1b6-86d2392d7c6f"
                        // height="170px"
                        height="max(calc(100vh - 225px - max(calc(9vh - 1px), 50px)), 200px)"
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
                    id="57b7cb4c-7792-4288-838e-fd9a9a13ae31"
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
