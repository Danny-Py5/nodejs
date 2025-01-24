import random as rd, datetime as dt

class Account():
    accounts = []

    def __init__(self):
        pass

    @staticmethod
    def _get_acc_no():
        rand_acc_num = list('1234567890')
        acc_nunber = ''
        while len(acc_nunber) <= 10: 
            acc_nunber += rd.choice(rand_acc_num)
        return acc_nunber

    @classmethod
    def add_account(cls, created_account):
        cls.accounts.append(created_account)

    def create_acc(self, name:str, age:int, sex:str) -> dict:
        user_data = {
            'name': name, 
            'age': age,
            'sex': sex,
            'account_number': self._get_acc_no(), 
            'time_created': dt.datetime.now().date(),
            'balance': 0
        }
        self.add_account(user_data)
        return user_data

acc = Account()
#print(acc.create_acc('daniel', 20, 'single'))
print(acc.accounts)

