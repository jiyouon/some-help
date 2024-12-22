from playsound import playsound
import asyncio
from edge_tts import Communicate
import google.generativeai as genai
import os
from scipy.io.wavfile import write
import pandas as pd

eatingYak = input("현재 먹고있는 약의 이름을 써주세요")
file_path = 'yak.csv'
pd.set_option('display.max_rows',None)
pd.set_option('display.max_columns',None)
data = pd.read_csv(file_path,encoding='utf-8',thousands=',')

# Google Generative AI 설정
genai.configure(api_key="AIzaSyBF5SGy2tQL9QCUVZX6vc41kKNe7ECZknU")

import cv2

def capture_image():
    a = input("약 추천 받겠습니까?(y/n): ")
    if a == 'y':
        aya = input("현재 증상을 입력해주세요(구체적으로 해주시면 결과가 더 좋게 나와요!): ")
        model = genai.GenerativeModel(model_name="gemini-1.5-flash")
        response = model.generate_content(f"""현재 내 증상은 {aya}이거이고 현재 내가 먹고 있는 약은 {eatingYak}이야
그래서 앞 내용을 고려해서 {data}여기서 어떤 약을 먹어야 하는지 "한가지"만 경고하지말고 이름만 알려줘""")
        print(response.text)
    else:
        print(':(')

# 실행
if __name__ == "__main__":
    capture_image()


