package com.app.service;

import java.io.File;
import java.io.IOException;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

public interface CloudinaryService {
	Map<String, String> uploadImage(File file) throws IOException;

}
