from playsound import playsound
import asyncio
from edge_tts import Communicate
import google.generativeai as genai
import os
import sounddevice as sd
from scipy.io.wavfile import write
import pandas as pd

file_path = 'yak.csv'
pd.set_option('display.max_rows',None)
pd.set_option('display.max_columns',None)
data = pd.read_csv(file_path,encoding='utf-8',thousands=',')
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
        name = '뿡'

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
            name = model.generate_content([f"""한국말로 사진속 약의 이름과 {data} 여기에 이름이 비슷한 걸 찾아서
                                           그것의 이름에 있는 행의 정보를 알려줘""",sample_file])
            print(name.text)
            break

        elif key == ord('t'):
            sample_file = genai.upload_file(path="captured_image.jpg", display_name="Jetpack drawing")
            model = genai.GenerativeModel(model_name="gemini-1.5-flash")
            name = input("약의 이름을 쓰세요 :")
            response = model.generate_content(f"한국말로 {name}과 {data}에서 이름이 비슷한 걸 찾아서 그것의 이름에 있는 행의 정보를 알려줘")
            print(response.text)
            break
            

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

