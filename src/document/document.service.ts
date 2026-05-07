import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DocumentService {
  constructor(private prisma: PrismaService) { }

  // ✅ UPLOAD DOCUMENT
  async upload(employeeId: number, data: any) {
    const doc = await this.prisma.document.create({
      data: {
        employeeId,
        name: data.name,
        fileUrl: data.fileUrl,
        type: data.type,
      },
    });

    return {
      id: doc.id,
      employeeId: doc.employeeId,
      name: doc.name,
      type: doc.type,
      uploadedAt: this.formatDate(doc.createdAt),
      status: 'success',
      message: 'Document uploaded successfully',
    };
  }

  // ✅ GET ALL DOCUMENTS
  async getAll(employeeId: number) {
    const docs = await this.prisma.document.findMany({
      where: { employeeId },
    });

    return docs.map((doc) => ({
      id: doc.id,
      name: doc.name,
      type: doc.type,
      uploadedAt: this.formatDate(doc.createdAt),
    }));
  }

  // ✅ DELETE DOCUMENT (SAFE)
  async delete(id: number) {
    const doc = await this.prisma.document.findUnique({
      where: { id },
    });

    if (!doc) {
      return {
        status: 'error',
        message: 'Document not found',
      };
    }

    await this.prisma.document.delete({
      where: { id },
    });

    return {
      deletedId: id,
      status: 'success',
      message: 'Document deleted successfully',
    };
  }

  // ✅ FORMAT DATE
  formatDate(date: Date) {
    return new Date(date).toLocaleString();
  }
}