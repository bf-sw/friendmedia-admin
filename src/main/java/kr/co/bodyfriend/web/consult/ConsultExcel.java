package kr.co.bodyfriend.web.consult;

import java.net.URLEncoder;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import kr.co.bodyfriend.common.util.UtilManager;

public class ConsultExcel extends AbstractExcelPOIView {
	
	@Override
	protected void buildExcelDocument(Map<String,Object> modelMap, Workbook workbook, HttpServletRequest request, HttpServletResponse response) throws Exception {
		String excelName 	= URLEncoder.encode(modelMap.get("title").toString(),"UTF-8");
		Sheet worksheet 	= workbook.createSheet("상담이력");
             
		@SuppressWarnings("unchecked")
		List<Map<String, Object>> excelList = (List<Map<String, Object>>) modelMap.get("excelData");
		Row row 							= worksheet.createRow(0);
		
		CellStyle greyCellStyle = workbook.createCellStyle();
		applyCellStyle(greyCellStyle, HSSFColor.GREY_25_PERCENT.index);
		
		Cell cell0 = row.createCell(0);
		Cell cell1 = row.createCell(1);
		Cell cell2 = row.createCell(2);
		Cell cell3 = row.createCell(3);
		Cell cell4 = row.createCell(4);
		Cell cell5 = row.createCell(5);
		Cell cell6 = row.createCell(6);
		Cell cell7 = row.createCell(7);
		Cell cell8 = row.createCell(8);
		Cell cell9 = row.createCell(9);
		Cell cell10 = row.createCell(10);
		Cell cell11 = row.createCell(11);
		
		cell0.setCellValue("번호");
		cell1.setCellValue("고객명");
		cell2.setCellValue("연락처");
		cell3.setCellValue("주문번호");
		cell4.setCellValue("채널");
		cell5.setCellValue("인입유형");
		cell6.setCellValue("품목");
		cell7.setCellValue("대분류");
		cell8.setCellValue("중분류");
		cell9.setCellValue("상담일자");
		cell10.setCellValue("접수부서");
		cell11.setCellValue("접수상담사");
		
		cell0.setCellStyle(greyCellStyle);
		cell1.setCellStyle(greyCellStyle);
		cell2.setCellStyle(greyCellStyle);
		cell3.setCellStyle(greyCellStyle);
		cell4.setCellStyle(greyCellStyle);
		cell5.setCellStyle(greyCellStyle);
		cell6.setCellStyle(greyCellStyle);
		cell7.setCellStyle(greyCellStyle);
		cell8.setCellStyle(greyCellStyle);
		cell9.setCellStyle(greyCellStyle);
		cell10.setCellStyle(greyCellStyle);
		cell11.setCellStyle(greyCellStyle);
		
		CellStyle whiteCellStyle = workbook.createCellStyle();
		applyCellStyle(whiteCellStyle, HSSFColor.WHITE.index);
		
		int line		= 1;
		Iterator itr 	= excelList.iterator();
		
		while (itr.hasNext()) {
			Map<String, Object> consultInfo = (Map<String, Object>) itr.next();
			
			row = worksheet.createRow(line);
			
			Cell bodyCell0 = row.createCell(0);
			Cell bodyCell1 = row.createCell(1);
			Cell bodyCell2 = row.createCell(2);
			Cell bodyCell3 = row.createCell(3);
			Cell bodyCell4 = row.createCell(4);
			Cell bodyCell5 = row.createCell(5);
			Cell bodyCell6 = row.createCell(6);
			Cell bodyCell7 = row.createCell(7);
			Cell bodyCell8 = row.createCell(8);
			Cell bodyCell9 = row.createCell(9);
			Cell bodyCell10 = row.createCell(10);
			Cell bodyCell11 = row.createCell(11);
			
			bodyCell0.setCellValue(line);
			bodyCell1.setCellValue(UtilManager.isEmptyOrNull(consultInfo.get("name")) ? "" : consultInfo.get("name").toString());
			bodyCell2.setCellValue(UtilManager.isEmptyOrNull(consultInfo.get("phone")) ? "" : consultInfo.get("phone").toString());
			bodyCell3.setCellValue(UtilManager.isEmptyOrNull(consultInfo.get("orderNo")) ? "" : consultInfo.get("orderNo").toString());
			bodyCell4.setCellValue(UtilManager.isEmptyOrNull(consultInfo.get("channel")) ? "" : consultInfo.get("channel").toString());
			bodyCell5.setCellValue(UtilManager.isEmptyOrNull(consultInfo.get("inType")) ? "" : consultInfo.get("inType").toString());
			bodyCell6.setCellValue(UtilManager.isEmptyOrNull(consultInfo.get("consultType")) ? "" : consultInfo.get("consultType").toString());
			bodyCell7.setCellValue(UtilManager.isEmptyOrNull(consultInfo.get("level1")) ? "" : consultInfo.get("level1").toString());
			bodyCell8.setCellValue(UtilManager.isEmptyOrNull(consultInfo.get("level2")) ? "" : consultInfo.get("level2").toString());
			bodyCell9.setCellValue(UtilManager.isEmptyOrNull(consultInfo.get("consultDate")) ? "" : consultInfo.get("consultDate").toString());
			bodyCell10.setCellValue(UtilManager.isEmptyOrNull(consultInfo.get("department")) ? "" : consultInfo.get("department").toString());
			bodyCell11.setCellValue(UtilManager.isEmptyOrNull(consultInfo.get("counselorNm")) ? "" : consultInfo.get("counselorNm").toString());
			
			bodyCell1.setCellStyle(whiteCellStyle);
			bodyCell2.setCellStyle(whiteCellStyle);
			bodyCell3.setCellStyle(whiteCellStyle);
			bodyCell4.setCellStyle(whiteCellStyle);
			bodyCell5.setCellStyle(whiteCellStyle);
			bodyCell6.setCellStyle(whiteCellStyle);
			bodyCell7.setCellStyle(whiteCellStyle);
			bodyCell8.setCellStyle(whiteCellStyle);
			bodyCell9.setCellStyle(whiteCellStyle);
			bodyCell10.setCellStyle(whiteCellStyle);
			bodyCell11.setCellStyle(whiteCellStyle);
			
			line += 1;
		}
		
		for (int cell = 0; cell < row.getPhysicalNumberOfCells(); cell += 1) {
			worksheet.autoSizeColumn(cell);
			worksheet.setColumnWidth(cell, (worksheet.getColumnWidth(cell))+(short)2048);
		}
		 
		response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
		response.setHeader("Content-Disposition", "attachment;filename=" + excelName + ".xlsx");
	}
	
	private void applyCellStyle(CellStyle cellStyle, short colorIndex) {
		cellStyle.setFillForegroundColor(colorIndex);
		cellStyle.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
		cellStyle.setAlignment(CellStyle.ALIGN_CENTER);
		cellStyle.setVerticalAlignment(CellStyle.VERTICAL_CENTER);
		cellStyle.setBorderLeft(HSSFCellStyle.BORDER_THIN);
		cellStyle.setBorderTop(HSSFCellStyle.BORDER_THIN);
		cellStyle.setBorderRight(HSSFCellStyle.BORDER_THIN);
		cellStyle.setBorderBottom(HSSFCellStyle.BORDER_THIN);
	}
	
	@Override
    protected Workbook createWorkbook() {
        return new XSSFWorkbook();
    }
}