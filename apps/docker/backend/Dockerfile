FROM python:3.12.6

WORKDIR /apps/backend

COPY ./apps/backend .



RUN python3 -m venv /opt/venv && \
    /opt/venv/bin/pip install --upgrade pip && \
    /opt/venv/bin/pip install -r requirements.txt && \
    chmod +x /apps/backend/entrypoint.sh

ENTRYPOINT ["bash", "/apps/backend/entrypoint.sh"]
