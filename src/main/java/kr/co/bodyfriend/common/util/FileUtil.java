package kr.co.bodyfriend.common.util;
 
import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import kr.co.bodyfriend.common.CommProperty;

 
public class FileUtil {
	
	private static Logger LOGGER = LoggerFactory.getLogger(FileUtil.class);
     
    public static List<Map<String,Object>> parseInsertFileInfo(String path, HttpServletRequest request) throws Exception{
    	
        MultipartHttpServletRequest multipartHttpServletRequest = (MultipartHttpServletRequest)request;
        Iterator<String> iterator 								= multipartHttpServletRequest.getFileNames();
        
        List<Map<String,Object>> list 	= new ArrayList<Map<String,Object>>();
        MultipartFile multipartFile 	= null;
        String originalFileName 		= null;
        String originalFileExtension 	= null;
        String storedFileName 			= null;
         
        String filePath 				= CommProperty.getProperty("system.webroot.filePath." + UtilManager.getSystemEnvironment()) + (UtilManager.isEmptyOrNull(path) ? CommProperty.getProperty("system.upload.path." + UtilManager.getSystemEnvironment()) : path);
        
        File file = new File(filePath);
        if (!file.exists()) {
            file.mkdirs();
        }
         
        while (iterator.hasNext()) {
            multipartFile = multipartHttpServletRequest.getFile(iterator.next());
            
            if (multipartFile.isEmpty() == false){
                originalFileName		= new String(multipartFile.getOriginalFilename().getBytes("8859_1"), "UTF-8");
                originalFileExtension 	= originalFileName.substring(originalFileName.lastIndexOf("."));
                storedFileName 			= UtilManager.getRandomString() + originalFileExtension;
                 
                file 					= new File(filePath + storedFileName);
                
                multipartFile.transferTo(file);
                
                Map<String, Object> listMap = new HashMap<String,Object>();
                listMap.put("ORIGINAL_FILE_NAME"	, originalFileName);
                listMap.put("STORED_FILE_NAME"		, storedFileName);
                listMap.put("FILE_SIZE"				, multipartFile.getSize());
                
                LOGGER.info("==========================================================================================");
                LOGGER.info("[FILE][UTIL][FileUtils][parseInsertFileInfo][원본 파일 명] {}", originalFileName);
                LOGGER.info("[FILE][UTIL][FileUtils][parseInsertFileInfo][저장 파일 명] {}", storedFileName);
                LOGGER.info("[FILE][UTIL][FileUtils][parseInsertFileInfo][파일 크기] {} byte", multipartFile.getSize());
                LOGGER.info("==========================================================================================");
                
                list.add(listMap);
            }
        }
        
        return list;
    }
}
