import serial
import time

def mh_z19():
    ser = serial.Serial(
        '/dev/serial0',
        baudrate=9600,
        bytesize=serial.EIGHTBITS,
        parity=serial.PARITY_NONE,
        stopbits=serial.STOPBITS_ONE,
        timeout=1.0
    )

    while 1:
        result=ser.write("\xff\x01\x86\x00\x00\x00\x00\x00\x79")
        s=ser.read(9)
        if s[0] == "\xff" and s[1] == "\x86":
            return {'co2': ord(s[2])*256 + ord(s[3])}
        break

print mh_z19()["co2"]
