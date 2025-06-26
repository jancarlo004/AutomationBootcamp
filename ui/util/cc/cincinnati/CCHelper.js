import path from 'path';
import world from "./world";
const fs = require('fs');
const xlsx = require('xlsx');

export class CCHelper {

    static async logDataInExcel(data){
     let fileName = ""
      if(data.FileName != "" && data.hasOwnProperty("FileName")){
        fileName  = data.fileName + ".xlsx";
      }
      else if (world.FileName != "" && world.hasOwnProperty("FileName")) {
        fileName = world.FileName + ".xlsx";
      }
      else {
        fileName = "default.xlsx";
      }

      var rootPath = path.resolve("./");
      var dataDir = path.resolve(rootPath, world.excelDir);
      var fileDir = path.join(dataDir, fileName);

      if(fs.existsSync(fileDir)){
          var wb = xlsx.readFile(fileDir);
          const worksheet = wb.  Sheets[wb.SheetNames[0]];
          const existingData = xlsx.utils.sheet_to_json(worksheet)
          const nextRow =  existingData.length + 2;
          xlsx.utils.sheet_add_json(worksheet, data, { skipHeader : true,origin: `A${nextRow}`});
          } else {
              const ws = xlsx.utils.json_to_sheet(data);
              var wb = xlsx.utils.book_new();
              xlsx.utils.book_append_sheet(wb, ws, 'ClaimsData');
          }

          xlsx.writeFile(wb, fileDir);
    }
}

