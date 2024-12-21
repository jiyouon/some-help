from playsound import playsound
import asyncio
from edge_tts import Communicate
import google.generativeai as genai
import os
import sounddevice as sd
from scipy.io.wavfile import write

# Google Generative AI 설정
genai.configure(api_key="AIzaSyBF5SGy2tQL9QCUVZX6vc41kKNe7ECZknU")

import cv2

def capture_image():
    # 웹캠 초기화
    cap = cv2.VideoCapture(0)

    if not cap.isOpened():
        print("웹캠을 열 수 없습니다.")
        return

    print("웹캠 실행 중. 사진을 저장하려면 's'를 누르세요. 종료하려면 'q'를 누르세요.")

    while True:
        # 웹캠에서 프레임 읽기
        ret, frame = cap.read()

        if not ret:
            print("프레임을 읽을 수 없습니다.")
            break

        # 프레임 화면에 표시
        cv2.imshow("Webcam", frame)

        # 키 입력 대기
        key = cv2.waitKey(1) & 0xFF

        # 's' 키를 누르면 사진 저장
        if key == ord('s'):
            cv2.imwrite("captured_image.jpg", frame)
            print("사진이 저장되었습니다: captured_image.jpg")
            sample_file = genai.upload_file(path="captured_image.jpg", display_name="Jetpack drawing")
            model = genai.GenerativeModel(model_name="gemini-1.5-flash")
            name = model.generate_content([sample_file,"사진에 나온 약을 설명과 대답없이 이름만 써줘"])
            response = model.generate_content([f"""
"한국말로 설명하라고" 약 {name.text}이 무슨약인지 주요 성분과 주의 사항을 설명해줘
경고하지말고 설명만 해 영어로 설명하면 안돼
""", sample_file])

            print(response.text)

        # 'q' 키를 누르면 종료
        elif key == ord('q'):
            print("종료합니다.")
            break

    # 웹캠 및 창 닫기
    cap.release()
    cv2.destroyAllWindows()

# 실행
if __name__ == "__main__":
    capture_image()


